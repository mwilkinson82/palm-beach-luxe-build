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
  style?: string
}

const Email = ({ firstName, style }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Your Style Book inquiry with Beau Monde Builders</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={eyebrow}>BEAU MONDE BUILDERS</Text>
        <Heading style={h1}>Thank you{firstName ? `, ${firstName}` : ''}</Heading>
        <Text style={text}>
          {style
            ? <>We have noted your interest in <strong>{style}</strong> and appreciate you reaching out to Beau Monde Builders.</>
            : <>We have received your Style Book inquiry and appreciate you reaching out to Beau Monde Builders.</>}
        </Text>
        <Text style={text}>
          Our office will review your inquiry and respond within twenty-four hours to arrange a private consultation on Worth Avenue.
        </Text>
        <Hr style={hr} />
        <Text style={signature}>Beau Monde Builders</Text>
        <Text style={meta}>205 Worth Avenue, Suite 120</Text>
        <Text style={meta}>Palm Beach, FL 33480</Text>
        <Text style={meta}>(561) 646-8992</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: 'Your Style Book Inquiry — Beau Monde Builders',
  displayName: 'Style Book — Confirmation',
  previewData: { firstName: 'Jane', style: 'Anglo-Caribbean' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Georgia, "Cormorant Garamond", serif' }
const container = { padding: '48px 32px', maxWidth: '600px', margin: '0 auto' }
const eyebrow = { fontSize: '11px', letterSpacing: '0.35em', color: '#b08a4a', fontFamily: 'Arial, sans-serif', margin: 0 }
const h1 = { color: '#0f2a3d', fontSize: '32px', fontWeight: 300, fontStyle: 'italic', margin: '8px 0 24px' }
const text = { color: '#3a4a55', fontSize: '16px', lineHeight: '1.7', margin: '0 0 16px' }
const hr = { borderTop: '1px solid #e0d5c2', margin: '40px 0 24px' }
const signature = { color: '#0f2a3d', fontSize: '14px', fontWeight: 500, margin: '0 0 12px', fontFamily: 'Arial, sans-serif' }
const meta = { color: '#6b7a85', fontSize: '13px', margin: '4px 0', fontFamily: 'Arial, sans-serif' }