/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  fullName?: string
  email?: string
  phone?: string
  message?: string
}

const Email = ({ fullName, email, phone, message }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New contact form submission{fullName ? ` from ${fullName}` : ''}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={eyebrow}>BEAU MONDE BUILDERS</Text>
        <Heading style={h1}>New Contact Inquiry</Heading>

        <Section style={card}>
          <Text style={label}>Name</Text>
          <Text style={value}>{fullName || '—'}</Text>

          <Text style={label}>Email</Text>
          <Text style={value}>
            {email ? <Link href={`mailto:${email}`} style={link}>{email}</Link> : '—'}
          </Text>

          {phone ? (
            <>
              <Text style={label}>Phone</Text>
              <Text style={value}>
                <Link href={`tel:${phone}`} style={link}>{phone}</Link>
              </Text>
            </>
          ) : null}
        </Section>

        {message ? (
          <Section style={card}>
            <Text style={label}>Message</Text>
            <Text style={messageText}>{message}</Text>
          </Section>
        ) : null}

        <Hr style={hr} />
        <Text style={footer}>Sent from the Beau Monde Builders contact form.</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: (data: Props) => `New Contact Inquiry${data?.fullName ? ` — ${data.fullName}` : ''}`,
  displayName: 'Contact Form — Internal Notification',
  to: 'ajhoover@mac.com',
  previewData: {
    fullName: 'Jane Doe',
    email: 'jane@example.com',
    phone: '(561) 000-0000',
    message: 'Interested in a new build on the Intracoastal.',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '48px 32px', maxWidth: '600px', margin: '0 auto' }
const eyebrow = { fontSize: '11px', letterSpacing: '0.35em', color: '#b08a4a', margin: 0 }
const h1 = { color: '#0f2a3d', fontSize: '26px', fontWeight: 400, margin: '8px 0 28px', fontFamily: 'Georgia, "Cormorant Garamond", serif', fontStyle: 'italic' }
const card = { backgroundColor: '#f5f0e6', padding: '24px 28px', marginBottom: '16px', borderLeft: '2px solid #b08a4a' }
const label = { color: '#b08a4a', fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase' as const, margin: '12px 0 4px' }
const value = { color: '#0f2a3d', fontSize: '16px', margin: '0 0 8px' }
const messageText = { color: '#3a4a55', fontSize: '15px', lineHeight: '1.7', whiteSpace: 'pre-wrap' as const, margin: '8px 0 0' }
const link = { color: '#b08a4a', textDecoration: 'underline' }
const hr = { borderTop: '1px solid #e0d5c2', margin: '32px 0 16px' }
const footer = { color: '#9ca4ab', fontSize: '12px', textAlign: 'center' as const, margin: 0 }