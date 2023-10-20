import Countdown from '../islands/Countdown.tsx';

export default function Page() {
  const date = new Date();
  date.setHours(date.getHours() + 1);
  return(
    <p>
      CELEBRATE <Countdown target={date.toISOString()} />.
    </p>
  );
}