import React, { useState, useEffect } from 'react'
import { Icon } from '../components/ui/Icon'
import type { IconName } from '../components/ui/Icon'
import { fetchParsedChangelog, type ParsedChangelogEntry } from '../lib/github'

type FilterType = 'all' | 'feature' | 'fix' | 'performance' | 'security'
type DateRange = 'all' | 'month' | 'quarter' | 'year'

export const Changelog: React.FC = () => {
  const [changelog, setChangelog] = useState<ParsedChangelogEntry[]>([])
  const [filter, setFilter] = useState<FilterType>('all')
  const [dateRange, setDateRange] = useState<DateRange>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadChangelog = async () => {
      try {
        setLoading(true)
        const data = await fetchParsedChangelog()
        setChangelog(data)
        setError(null)
      } catch (err) {
        setError('Failed to load changelog. Please try again later.')
        console.error('Error loading changelog:', err)
      } finally {
        setLoading(false)
      }
    }

    loadChangelog()
  }, [])

  const filterChangelog = (entries: ParsedChangelogEntry[]) => {
    let filtered = entries

    // Apply type filter
    if (filter !== 'all') {
      filtered = filtered.filter((entry) => entry.entries.some((e) => e.type === filter))
    }

    // Apply date range filter
    if (dateRange !== 'all') {
      const now = new Date()
      const cutoff = new Date()

      switch (dateRange) {
        case 'month':
          cutoff.setMonth(now.getMonth() - 1)
          break
        case 'quarter':
          cutoff.setMonth(now.getMonth() - 3)
          break
        case 'year':
          cutoff.setFullYear(now.getFullYear() - 1)
          break
      }

      filtered = filtered.filter((entry) => new Date(entry.date) >= cutoff)
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (entry) =>
          entry.title.toLowerCase().includes(query) ||
          entry.description.toLowerCase().includes(query) ||
          entry.entries.some(
            (e) =>
              e.title.toLowerCase().includes(query) ||
              e.description.toLowerCase().includes(query)
          )
      )
    }

    return filtered
  }

  const filteredChangelog = filterChangelog(changelog)

  const getTypeIcon = (type: string): IconName => {
    switch (type) {
      case 'feature':
        return 'star'
      case 'fix':
        return 'checkmark'
      case 'performance':
        return 'zap'
      case 'security':
        return 'shield'
      default:
        return 'star'
    }
  }

  const getTypeColor = (type: string): string => {
    switch (type) {
      case 'feature':
        return '#34A853'
      case 'fix':
        return '#EA4335'
      case 'performance':
        return '#FBBC04'
      case 'security':
        return '#6366f1'
      default:
        return '#80868B'
    }
  }

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const importanceDots = (importance: 'high' | 'medium' | 'low') => {
    return (
      <div className="flex gap-1">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i < (importance === 'high' ? 3 : importance === 'medium' ? 2 : 1)
                ? 'bg-current'
                : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-light-bg text-dark-text">
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-[36px] font-bold text-dark-text mb-2">Latest Updates</h1>
          <p className="text-lg text-medium-gray">
            See what's new, what's coming, what's fixed.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-8 space-y-4">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all' as FilterType, label: 'All', icon: 'cube' as IconName },
              { id: 'feature' as FilterType, label: 'Features', icon: 'star' as IconName },
              { id: 'fix' as FilterType, label: 'Fixes', icon: 'checkmark' as IconName },
              { id: 'performance' as FilterType, label: 'Performance', icon: 'zap' as IconName },
              { id: 'security' as FilterType, label: 'Security', icon: 'shield' as IconName },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-200 min-h-[48px] ${
                  filter === tab.id
                    ? 'bg-google-blue text-white shadow-md'
                    : 'bg-white text-dark-text hover:bg-light-gray border border-light-gray'
                }`}
              >
                <Icon
                  name={tab.icon}
                  size={18}
                  color={filter === tab.id ? '#FFFFFF' : '#202124'}
                />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Date Range and Search */}
          <div className="flex flex-col sm:flex-row gap-4">
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value as DateRange)}
              className="px-4 py-2 bg-white border border-light-gray rounded-lg text-dark-text focus:outline-none focus:ring-2 focus:ring-google-blue min-h-[48px]"
            >
              <option value="all">All Time</option>
              <option value="month">This Month</option>
              <option value="quarter">Last 3 Months</option>
              <option value="year">This Year</option>
            </select>

            <div className="flex-1 relative">
              <Icon
                name="search"
                size={20}
                color="#80868B"
                className="absolute left-3 top-1/2 transform -translate-y-1/2"
              />
              <input
                type="text"
                placeholder="Search changelog entries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white border border-light-gray rounded-lg text-dark-text placeholder-medium-gray focus:outline-none focus:ring-2 focus:ring-google-blue min-h-[48px]"
              />
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-google-blue"></div>
            <p className="mt-4 text-medium-gray">Loading changelog...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-light-red border border-google-red rounded-lg p-6 text-center">
            <Icon name="x" size={48} color="#EA4335" className="mx-auto mb-4" />
            <p className="text-dark-text font-semibold">{error}</p>
          </div>
        )}

        {/* Changelog Entries */}
        {!loading && !error && (
          <>
            {filteredChangelog.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-medium-gray">No entries found matching your filters.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredChangelog.map((entry) => (
                  <div
                    key={entry.id}
                    className="bg-white rounded-lg shadow-md border border-light-gray overflow-hidden"
                  >
                    <div className="flex flex-col md:flex-row">
                      {/* Left Sidebar - Icon and Type */}
                      <div
                        className="flex-shrink-0 p-6 border-b md:border-b-0 md:border-r"
                        style={{
                          borderColor: getTypeColor(entry.type),
                          borderWidth: '4px',
                        }}
                      >
                        <div className="flex flex-col items-center md:items-start gap-3">
                          <Icon
                            name={getTypeIcon(entry.type)}
                            size={24}
                            color={getTypeColor(entry.type)}
                          />
                          <div className="text-xs font-semibold uppercase" style={{ color: getTypeColor(entry.type) }}>
                            {entry.type}
                          </div>
                        </div>
                      </div>

                      {/* Right Side - Content */}
                      <div className="flex-1 p-6">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h2 className="text-xl font-bold text-dark-text">{entry.title}</h2>
                              <span className="px-2 py-1 bg-light-gray rounded text-sm text-dark-text">
                                v{entry.version}
                              </span>
                            </div>
                            <p className="text-sm text-medium-gray mb-2">
                              {formatDate(entry.date)}
                            </p>
                            {entry.description && (
                              <p className="text-medium-gray leading-relaxed">{entry.description}</p>
                            )}
                          </div>
                          <a
                            href={entry.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-google-blue hover:underline"
                          >
                            <span className="text-sm font-semibold">View Release</span>
                            <Icon name="external-link" size={16} color="#6366f1" />
                          </a>
                        </div>

                        {/* Entry Items */}
                        {entry.entries.length > 0 && (
                          <div className="space-y-3 mt-6 pt-6 border-t border-light-gray">
                            {entry.entries
                              .filter((e) => filter === 'all' || e.type === filter)
                              .map((item, index) => (
                                <div key={index} className="flex items-start gap-4">
                                  <div
                                    className="flex-shrink-0 mt-1"
                                    style={{ color: getTypeColor(item.type) }}
                                  >
                                    {importanceDots(item.importance)}
                                  </div>
                                  <div className="flex-1">
                                    <h3 className="font-semibold text-dark-text mb-1">
                                      {item.title}
                                    </h3>
                                    {item.description && (
                                      <p className="text-sm text-medium-gray">{item.description}</p>
                                    )}
                                  </div>
                                </div>
                              ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

