import { css } from "@thi.ng/hiccup-css/css";
import { at_media } from "@thi.ng/hiccup-css/media";
import { injectStyleSheet } from "@thi.ng/hiccup-css/inject";
import { px } from "@thi.ng/hiccup-css/units";

injectStyleSheet(
    css(
        [
            [".container",
                {
                    "text-align": "center"
                }],
            [".button",
                {
                    "background-color": "#ff0000",
                    width: px(320),
                    padding: px(20),
                    "border-radius": px(5),
                    border: "none",
                    outline: "none",
                },
                [":hover",
                    {
                        color: "#fff",
                    }],
                [":active",
                    {
                        position: "relative",
                        top: px(2),
                    }]],
            at_media(
                { screen: true, "max-width": px(640) },
                [
                    ".button", {
                        width: px(160)
                    }
                ]
            )
        ],
        { scope: "_foo" }
    )
);

export default {
    button: "button_foo",
    container: "container_foo",
};