import { css } from "@styled-system/css";
import { code } from "@styled-system/recipes";

export const Code = (props: React.ComponentProps<"code">) => {
  const inline = code({ variant: "outline" });
  console.log(code({ variant: "outline" }));
  return (
    <code
      className={css({
        ":not(pre) > &": {
          ...code.raw({ variant: "outline" }),
        },
      })}
      {...props}
    />
  );
};
