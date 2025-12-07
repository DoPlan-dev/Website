// Utility functions for parsing and generating interactions

import { Interaction, InteractionTrigger, InteractionAction } from '../../types/states'

/**
 * Validate an interaction
 */
export function validateInteraction(interaction: Interaction): boolean {
  if (!interaction.id || !interaction.trigger || !interaction.action) {
    return false
  }

  // Validate trigger
  const validTriggers: InteractionTrigger[] = ['hover', 'click', 'focus', 'blur', 'scroll', 'load', 'custom']
  if (!validTriggers.includes(interaction.trigger)) {
    return false
  }

  // Validate action
  const validActions: InteractionAction[] = ['navigate', 'toggle', 'animate', 'show', 'hide', 'custom']
  if (!validActions.includes(interaction.action)) {
    return false
  }

  return true
}

/**
 * Generate JavaScript code for an interaction
 */
export function generateInteractionCode(interaction: Interaction): string {
  if (!validateInteraction(interaction)) {
    return ''
  }

  const { trigger, action, target, config } = interaction

  let code = ''
  
  // Generate trigger code
  switch (trigger) {
    case 'hover':
      code += `element.addEventListener('mouseenter', () => {\n`
      break
    case 'click':
      code += `element.addEventListener('click', () => {\n`
      break
    case 'focus':
      code += `element.addEventListener('focus', () => {\n`
      break
    case 'blur':
      code += `element.addEventListener('blur', () => {\n`
      break
    case 'scroll':
      code += `window.addEventListener('scroll', () => {\n`
      break
    case 'load':
      code += `window.addEventListener('load', () => {\n`
      break
    default:
      return ''
  }

  // Generate action code
  switch (action) {
    case 'navigate':
      if (target) {
        code += `  window.location.href = '${target}';\n`
      }
      break
    case 'toggle':
      if (target) {
        code += `  const target = document.querySelector('${target}');\n`
        code += `  if (target) target.classList.toggle('active');\n`
      }
      break
    case 'show':
      if (target) {
        code += `  const target = document.querySelector('${target}');\n`
        code += `  if (target) target.style.display = 'block';\n`
      }
      break
    case 'hide':
      if (target) {
        code += `  const target = document.querySelector('${target}');\n`
        code += `  if (target) target.style.display = 'none';\n`
      }
      break
    case 'animate':
      if (config?.animation) {
        code += `  element.style.animation = '${config.animation}';\n`
      }
      break
    default:
      code += `  // Custom action: ${action}\n`
  }

  code += `});\n`
  return code
}

/**
 * Parse interaction from configuration
 */
export function parseInteraction(config: Record<string, any>): Interaction | null {
  try {
    const interaction: Interaction = {
      id: config.id || `interaction-${Date.now()}`,
      trigger: config.trigger || 'click',
      action: config.action || 'toggle',
      target: config.target,
      condition: config.condition,
      config: config.config
    }

    if (validateInteraction(interaction)) {
      return interaction
    }
  } catch {
    // Invalid configuration
  }

  return null
}

/**
 * Generate CSS for interaction states
 */
export function generateInteractionCSS(interactions: Interaction[]): string {
  return interactions
    .map(interaction => generateInteractionCode(interaction))
    .join('\n\n')
}
