import type { JSX } from 'react';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface Props {
  title: string;
  tag: HeadingTag;
}

const Title = ({ title, tag }: Props) => {
  const Tag = tag as keyof JSX.IntrinsicElements;
  return <Tag>{title}</Tag>;
};

export default Title;
