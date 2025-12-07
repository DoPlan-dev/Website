/**
 * Form Templates Data
 * Pre-built form layouts for the Form Builder
 */

export type FormFieldType = 
  | 'text' 
  | 'email' 
  | 'password' 
  | 'number' 
  | 'tel' 
  | 'url'
  | 'textarea' 
  | 'select' 
  | 'checkbox' 
  | 'radio' 
  | 'file' 
  | 'date' 
  | 'time'
  | 'datetime-local'

export interface FormFieldOption {
  id: string
  label: string
  value: string
}

export interface FormValidationRule {
  type: 'required' | 'minLength' | 'maxLength' | 'pattern' | 'email' | 'url' | 'min' | 'max'
  value?: string | number
  message: string
}

export interface FormField {
  id: string
  type: FormFieldType
  label: string
  name: string
  placeholder?: string
  defaultValue?: string
  required?: boolean
  options?: FormFieldOption[] // For select, radio, checkbox
  validation?: FormValidationRule[]
  styles?: {
    width?: string
    padding?: string
    fontSize?: string
  }
  layout?: {
    columnSpan?: number
    row?: number
  }
}

export interface FormTemplate {
  id: string
  name: string
  description: string
  fields: FormField[]
  layout: {
    columns: number
    gap: string
  }
  styles: {
    backgroundColor?: string
    padding?: string
    borderRadius?: string
  }
  submission: {
    method: 'POST' | 'GET'
    action?: string
    endpoint?: string
    successMessage?: string
    errorMessage?: string
  }
}

export const formTemplates: FormTemplate[] = [
  {
    id: 'form-contact',
    name: 'Contact Form',
    description: 'Simple contact form with name, email, and message',
    fields: [
      {
        id: 'name',
        type: 'text',
        label: 'Name',
        name: 'name',
        placeholder: 'Your name',
        required: true,
        validation: [
          { type: 'required', message: 'Name is required' },
          { type: 'minLength', value: 2, message: 'Name must be at least 2 characters' }
        ]
      },
      {
        id: 'email',
        type: 'email',
        label: 'Email',
        name: 'email',
        placeholder: 'your@email.com',
        required: true,
        validation: [
          { type: 'required', message: 'Email is required' },
          { type: 'email', message: 'Please enter a valid email' }
        ]
      },
      {
        id: 'message',
        type: 'textarea',
        label: 'Message',
        name: 'message',
        placeholder: 'Your message...',
        required: true,
        validation: [
          { type: 'required', message: 'Message is required' },
          { type: 'minLength', value: 10, message: 'Message must be at least 10 characters' }
        ]
      }
    ],
    layout: {
      columns: 1,
      gap: '1rem'
    },
    styles: {
      padding: '2rem',
      borderRadius: '0.75rem'
    },
    submission: {
      method: 'POST',
      successMessage: 'Thank you! Your message has been sent.',
      errorMessage: 'Something went wrong. Please try again.'
    }
  },
  {
    id: 'form-signup',
    name: 'Sign Up Form',
    description: 'User registration form with email and password',
    fields: [
      {
        id: 'email',
        type: 'email',
        label: 'Email',
        name: 'email',
        placeholder: 'your@email.com',
        required: true,
        validation: [
          { type: 'required', message: 'Email is required' },
          { type: 'email', message: 'Please enter a valid email' }
        ]
      },
      {
        id: 'password',
        type: 'password',
        label: 'Password',
        name: 'password',
        placeholder: '••••••••',
        required: true,
        validation: [
          { type: 'required', message: 'Password is required' },
          { type: 'minLength', value: 8, message: 'Password must be at least 8 characters' }
        ]
      },
      {
        id: 'confirm-password',
        type: 'password',
        label: 'Confirm Password',
        name: 'confirmPassword',
        placeholder: '••••••••',
        required: true,
        validation: [
          { type: 'required', message: 'Please confirm your password' }
        ]
      },
      {
        id: 'terms',
        type: 'checkbox',
        label: 'I agree to the Terms and Conditions',
        name: 'terms',
        required: true,
        validation: [
          { type: 'required', message: 'You must agree to the terms' }
        ]
      }
    ],
    layout: {
      columns: 1,
      gap: '1rem'
    },
    styles: {
      padding: '2rem',
      borderRadius: '0.75rem'
    },
    submission: {
      method: 'POST',
      successMessage: 'Account created successfully!',
      errorMessage: 'Failed to create account. Please try again.'
    }
  },
  {
    id: 'form-survey',
    name: 'Survey Form',
    description: 'Multi-field survey with various input types',
    fields: [
      {
        id: 'name',
        type: 'text',
        label: 'Name',
        name: 'name',
        required: true
      },
      {
        id: 'age',
        type: 'number',
        label: 'Age',
        name: 'age',
        validation: [
          { type: 'min', value: 18, message: 'Must be 18 or older' },
          { type: 'max', value: 120, message: 'Please enter a valid age' }
        ]
      },
      {
        id: 'country',
        type: 'select',
        label: 'Country',
        name: 'country',
        options: [
          { id: 'us', label: 'United States', value: 'us' },
          { id: 'uk', label: 'United Kingdom', value: 'uk' },
          { id: 'ca', label: 'Canada', value: 'ca' },
          { id: 'au', label: 'Australia', value: 'au' }
        ],
        required: true
      },
      {
        id: 'preference',
        type: 'radio',
        label: 'Preferred Contact Method',
        name: 'preference',
        options: [
          { id: 'email', label: 'Email', value: 'email' },
          { id: 'phone', label: 'Phone', value: 'phone' },
          { id: 'sms', label: 'SMS', value: 'sms' }
        ],
        required: true
      },
      {
        id: 'feedback',
        type: 'textarea',
        label: 'Feedback',
        name: 'feedback',
        placeholder: 'Your feedback...'
      }
    ],
    layout: {
      columns: 1,
      gap: '1.5rem'
    },
    styles: {
      padding: '2rem',
      borderRadius: '0.75rem'
    },
    submission: {
      method: 'POST',
      successMessage: 'Thank you for your feedback!',
      errorMessage: 'Failed to submit. Please try again.'
    }
  },
  {
    id: 'form-newsletter',
    name: 'Newsletter Signup',
    description: 'Simple newsletter subscription form',
    fields: [
      {
        id: 'email',
        type: 'email',
        label: 'Email',
        name: 'email',
        placeholder: 'Enter your email',
        required: true,
        validation: [
          { type: 'required', message: 'Email is required' },
          { type: 'email', message: 'Please enter a valid email' }
        ]
      }
    ],
    layout: {
      columns: 1,
      gap: '1rem'
    },
    styles: {
      padding: '1.5rem',
      borderRadius: '0.5rem'
    },
    submission: {
      method: 'POST',
      successMessage: 'Successfully subscribed!',
      errorMessage: 'Subscription failed. Please try again.'
    }
  },
  {
    id: 'form-feedback',
    name: 'Feedback Form',
    description: 'Customer feedback form with rating',
    fields: [
      {
        id: 'rating',
        type: 'select',
        label: 'Rating',
        name: 'rating',
        options: [
          { id: '5', label: '5 - Excellent', value: '5' },
          { id: '4', label: '4 - Very Good', value: '4' },
          { id: '3', label: '3 - Good', value: '3' },
          { id: '2', label: '2 - Fair', value: '2' },
          { id: '1', label: '1 - Poor', value: '1' }
        ],
        required: true
      },
      {
        id: 'comment',
        type: 'textarea',
        label: 'Comments',
        name: 'comment',
        placeholder: 'Share your thoughts...'
      },
      {
        id: 'contact',
        type: 'checkbox',
        label: 'I would like to be contacted',
        name: 'contact'
      }
    ],
    layout: {
      columns: 1,
      gap: '1rem'
    },
    styles: {
      padding: '2rem',
      borderRadius: '0.75rem'
    },
    submission: {
      method: 'POST',
      successMessage: 'Thank you for your feedback!',
      errorMessage: 'Failed to submit feedback.'
    }
  }
]

export const getFormTemplateById = (id: string): FormTemplate | undefined => {
  return formTemplates.find(template => template.id === id)
}

