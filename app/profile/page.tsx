import { Section } from "@/components/ui/section";
import { UserInfo } from "@/components/account/user-info";
export default async function Profile() {
  return (
    <Section title="Profile">
      <UserInfo />
    </Section>
  );
}
