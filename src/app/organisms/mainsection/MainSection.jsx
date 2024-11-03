import MotoCard from "@/app/molecules/motocard/MotoCard"
import TodaysSection from "@/app/molecules/todayssection/TodaysSection"
import RecentNews from "@/app/molecules/recentnews/RecentNews"
import YesterdaySection from "@/app/molecules/yesterdaysection/YesterdaySection"
import BlockSeparator from "@/app/atoms/blockseparator/BlockSeparator"
import TopStoriesSection from "@/app/molecules/topstoriessection/TopStoriesSection"
import LatestNewsSection from "@/app/molecules/latestnewssection/LatestNewsSection"

const MainSection = () => {
  return (
    <main style={{ width: '100%' }}>
      <MotoCard />
      <div style={{ backgroundColor: '#FFF9F1', paddingBottom: '40px' }}>
        <RecentNews />
        <TodaysSection />
        <div style={{ marginLeft: '20px', marginRight: '20px', marginTop: '44px' }}>
          <BlockSeparator borderConfig={{ borderColor: '#1E1B4B', borderWidth: '1px' }} />
        </div>
        <YesterdaySection />
        <div style={{ marginLeft: '20px', marginRight: '20px', marginTop: '32px' }}>
          <BlockSeparator borderConfig={{ borderColor: '#1E1B4B', borderWidth: '0' }}
            bgImage="linear-gradient(90.97deg, #6C7AF7 0%, #A97DF1 99.9%)"
          />
        </div>
      </div>
      <TopStoriesSection />
      <LatestNewsSection />
    </main>
  )
}

export default MainSection