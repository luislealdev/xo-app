import { Colors } from '@/constants/Colors';

export function useThemeColor(
  props: { dark?: string },
  colorName: keyof typeof Colors.dark
) {
  const colorFromProps = props.dark;

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors.dark[colorName];
  }
}