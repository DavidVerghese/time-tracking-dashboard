import Grid from "../Grid/Grid";
import GlobalError from "./error";

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