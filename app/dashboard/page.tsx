import { TipsCarousel } from "@/components/dashboard/tips-carousel"
import { Resources } from "@/components/dashboard/resources/resources"
import { DashboardLayout, WelcomeHeader, ComingSoonCard } from "./components"


export default function Home() {
  return (
    <DashboardLayout>
      <WelcomeHeader />
      <hr />
      <TipsCarousel />
      <ComingSoonCard />
      <Resources />
    </DashboardLayout>
  )
}
