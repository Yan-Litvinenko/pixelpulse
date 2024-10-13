import type { SkipAnimation } from '@/interface/welcome/Welcome.interface';

export default function skipAnimation(props: SkipAnimation): void {
    const { title, textOne, textTwo } = props;

    [...title.timers, ...textOne.timers, ...textTwo.timers].forEach((timer) => clearTimeout(timer));

    title.setAnimationText(title.textForPrint);
    textOne.setAnimationText(textOne.textForPrint);
    textTwo.setAnimationText(textTwo.textForPrint);
}
