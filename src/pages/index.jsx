// Layout
import DefaultLayout from "layout/default";

// components
import NewLP from "organisms/NewestLP";
import Roles from "molecules/Roles";
import Timeline from "molecules/Timeline";
import Testimony from "molecules/Testimony";
import Process from "molecules/Process";
import Progress from "molecules/Progress";

export default function Home() {
  return (
    <DefaultLayout>
      <NewLP />
      <Roles />
      <Timeline />
      <Testimony />
      <Process />
      <Progress />
    </DefaultLayout>
  );
}
