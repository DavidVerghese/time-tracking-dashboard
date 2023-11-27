import Grid from "../Grid/Grid";
import GlobalError from "./error";

export async function generateMetadata({ params }) {
  // read route params
  const timeframe = params.timeframe
  // fetch data
  return {
    title: `${timeframe[0].toUpperCase() + timeframe.slice(1)}`
  }
}

export default function timeTracker({ params }) {
  const acceptableTimeFrames = ['daily', 'weekly', 'monthly'];
  if (acceptableTimeFrames.includes(params.timeframe)) {
    return (<Grid timeframe={params.timeframe} />)
  }
  else {
    return <GlobalError/>
  }
	return <div>Invalid</div>
}