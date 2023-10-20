import { useSignal } from '@preact/signals';
import { PropertySignature } from "https://deno.land/x/ts_morph@17.0.1/ts_morph.js";
import { useEffect } from 'preact/hooks';

const timeFmt = new Intl.RelativeTimeFormat('en-Us');

export default function Countdown(props: { target: string}) {
  const target = new Date(props.target);
  const now = useSignal(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      if (now.value > target) {
        clearInterval(timer);
      }
      now.value = new Date();
    }, 1000);
    return () => clearInterval(timer);
  }, [props.target]);

  const secondsLeft = Math.floor(
    (target.getTime() - now.value.getTime()) / 1000,
  );

  if (secondsLeft <= 0) {
    return <span>🎉</span>;
  }

  return<span>{timeFmt.format(secondsLeft, 'seconds')}</span>;
}