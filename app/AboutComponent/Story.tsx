import StoryDetails from "./StoryDetails";
import styles from "./AboutMobile.module.css";

export default function Story() {
  return (
    <div className={styles.story}>
      <div className="flex items-center gap-4">
        <p className="font-body whitespace-nowrap text-primary-500">
          01 - OUR STORY
        </p>

        <hr className="h-px flex-1 border-0 bg-neutral-border" />
      </div>
      <StoryDetails />
    </div>
  )
}
