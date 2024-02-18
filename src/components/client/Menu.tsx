"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import * as SegmentGroup from "../ui/segment-group";

function Menu(props: SegmentGroup.RootProps) {
  const pathname = usePathname();
  const options = [
    { label: "Top", href: "/" },
    { label: "MDX Preview", href: "/mdx-preview" },
  ];
  return (
    <SegmentGroup.Root value={pathname} {...props}>
      {options.map((option) => (
        <SegmentGroup.Item key={option.href} value={option.href}>
          <SegmentGroup.ItemControl />
          <SegmentGroup.ItemText>
            <NextLink href={option.href}>{option.label}</NextLink>
          </SegmentGroup.ItemText>
        </SegmentGroup.Item>
      ))}
      <SegmentGroup.Indicator />
    </SegmentGroup.Root>
  );
}

export default Menu;
