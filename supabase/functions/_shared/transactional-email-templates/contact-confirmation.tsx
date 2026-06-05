/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  firstName?: string
}

const Email = ({ firstName }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Thank you for contacting Beau Monde Builders</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Text style={eyebrow}>BEAU MONDE BUILDERS</Text>
        </Section>
        <Heading style={h1}>Thank you{firstName ? `, ${firstName}` : ''}</Heading>
        <Text style={text}>
          We have received your inquiry and appreciate you reaching out to Beau Monde Builders.
        </Text>
        <Text style={text}>
          Our office will review your message and respond within twenty-four hours to arrange a private consultation on the Space Coast.
        </Text>
        <Hr style={hr} />
        <Text style={signature}>Beau Monde Builders</Text>
        <Text style={meta}>1129 Rockledge Blvd</Text>
        <Text style={meta}>Rockledge, FL 32955</Text>
        <Text style={meta}>(321) 298-4122</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: 'Thank You for Contacting Beau Monde Builders',
  displayName: 'Contact Form — Confirmation',
  previewData: { firstName: 'Jane' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Georgia, "Cormorant Garamond", serif' }
const container = { padding: '48px 32px', maxWidth: '600px', margin: '0 auto' }
const header = { marginBottom: '32px' }
const eyebrow = { fontSize: '11px', letterSpacing: '0.35em', color: '#b08a4a', fontFamily: 'Arial, sans-serif', margin: 0 }
const h1 = { color: '#0f2a3d', fontSize: '32px', fontWeight: 300, fontStyle: 'italic', margin: '0 0 24px' }
const text = { color: '#3a4a55', fontSize: '16px', lineHeight: '1.7', margin: '0 0 16px' }
const hr = { borderTop: '1px solid #e0d5c2', margin: '40px 0 24px' }
const signature = { color: '#0f2a3d', fontSize: '14px', fontWeight: 500, margin: '0 0 12px', fontFamily: 'Arial, sans-serif' }
const meta = { color: '#6b7a85', fontSize: '13px', margin: '4px 0', fontFamily: 'Arial, sans-serif' }