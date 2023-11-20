import type { Tokens } from "marked";
import { ComponentProps } from "preact";
import Text from "./text";
import clsx from "clsx";
import { getTextToken, getLinkToken } from "./list-item";
import Link, { isActiveLinkToken } from "./link";
import { useState } from "preact/hooks";
import useHistory from "../hooks/useHistory";

type LeafListItemProps = {
  token: Tokens.ListItem;
} & ComponentProps<"li">;

export default function LeafListItem({
  token,
  className,
  ...props
}: LeafListItemProps) {
  const textToken = getTextToken(token);

  if (textToken === undefined) {
    console.error(
      "text token not found while rendering Leaf list item.",
      token
    );
    return null;
  }

  const linkToken = getLinkToken(textToken);

  const _isActive = (url: string, token?: Tokens.Link) =>
    token && isActiveLinkToken(token, url);
  const [isActive, setIsActive] = useState(
    _isActive(window.location.href, linkToken)
  );

  useHistory((url) => {
    setIsActive(_isActive(url, linkToken));
  });

  return (
    <li className={clsx("node", isActive && "active", className)} {...props}>
      <div className="head">
        {linkToken ? (
          <Link className="text link" token={linkToken} />
        ) : (
          <Text className="text link" token={textToken} />
        )}
      </div>
    </li>
  );
}
