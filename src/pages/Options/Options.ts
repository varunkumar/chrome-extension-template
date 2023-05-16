import './Options.css';

interface Props {
  title: string;
}

export default function Options({ title }: Props) {
  return `<div class="OptionsContainer">${title} Page</div>`;
}
