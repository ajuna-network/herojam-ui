import { Section } from "@/components/ui/section";
import { UserProfile } from "@/components/account/user-profile";
export default async function Profile() {
  return (
    <Section
      title="Profile"
      className="flex flex-col items-center justify-center"
    >
      <UserProfile />
    </Section>
  );
}
