import Grid from "../Grid/Grid";

export default function timeTracker({ params }) {
  const acceptableTimeFrames = ['daily', 'weekly', 'monthly'];
  if (acceptableTimeFrames.includes(params.timeframe)) {
    return (<Grid timeframe={params.timeframe} />)
  }
	return <div>Invalid</div>
}