import {
  Html,
  Text,
  Container,
  Section,
  Heading,
} from "@react-email/components";

type ContactEmailProps = {
  name: string;
  email: string;
  message: string;
};

export default function ContactEmail({
  name,
  email,
  message,
}: ContactEmailProps) {
  return (
    <Html>
      <Section style={{ backgroundColor: "#f3f3f5", padding: "40px" }}>
        <Container
          style={{
            backgroundColor: "#fff",
            borderRadius: "8px",
            padding: "20px",
          }}
        >
          <Heading as="h2">📩 New Contact Message</Heading>
          <Text>
            <strong>Name:</strong> {name}
          </Text>
          <Text>
            <strong>Email:</strong> {email}
          </Text>
          <Text>
            <strong>Message:</strong> {message}
          </Text>
        </Container>
      </Section>
    </Html>
  );
}
