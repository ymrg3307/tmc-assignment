import MotoCard from "@/app/molecules/motocard/MotoCard"
import TodaysSection from "@/app/organisms/mainsection/todayssection/TodaysSection"
import RecentNews from "@/app/organisms/mainsection/recentnews/RecentNews"
import YesterdaySection from "@/app/organisms/mainsection/yesterdaysection/YesterdaySection"
import BlockSeparator from "@/app/atoms/blockseparator/BlockSeparator"
import TopStoriesSection from "@/app/organisms/mainsection/topstoriessection/TopStoriesSection"
import LatestNewsSection from "@/app/organisms/mainsection/latestnewssection/LatestNewsSection"
import ExploreNewsLetterSection from "@/app/organisms/mainsection/explorenewslettersection/ExploreNewsLetterSection"


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
      <ExploreNewsLetterSection />
    </main>
  )
}

export default MainSection