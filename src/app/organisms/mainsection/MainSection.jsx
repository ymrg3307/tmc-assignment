import MotoCard from "@/app/molecules/motocard/MotoCard"
import TodaysSection from "@/app/molecules/motocard/todayssection/TodaysSection"
import RecentNews from "@/app/molecules/recentnews/RecentNews"

const MainSection = () => {
  return (
    <main style={{backgroundColor: '#FFF9F1'}}>
        <MotoCard />
        <RecentNews />
        <TodaysSection />
    </main>
  )
}

export default MainSection