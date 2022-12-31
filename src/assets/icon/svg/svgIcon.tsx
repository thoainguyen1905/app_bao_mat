import React from 'react';
import Svg, {
    ClipPath,
    Defs,
    G,
    Path,
    Circle,
    Rect,
    Stop,
    Ellipse,
    LinearGradient,
    RadialGradient,
    Text,
    Image,
    TSpan,
    Mask,
} from 'react-native-svg';
import {Spacing} from "@assets";
import {Colors} from "@theme";
export type iconProps = {
    width?: string | number;
    height?: string | number;
    iconFillColor?: string;
    style?: any;
    onPress?: any;
    circleFillIcon?: any;
};
export const IconFacebook = ({style, width, height}: iconProps) => (
    <Svg
        width={Spacing.width32}
        height={Spacing.width32}
        style={style}
        viewBox="0 0 32 32"
        fill="none">
        <Circle cx={16} cy={16} r={14} fill="url(#paint0_linear_53_168)" />
        <Path
            d="M21.214 20.282l.622-3.952h-3.89v-2.563c0-1.081.542-2.136 2.284-2.136H22V8.267S20.395 8 18.86 8c-3.205 0-5.298 1.893-5.298 5.318v3.012H10v3.952h3.562v9.552a14.468 14.468 0 004.383 0v-9.552h3.269z"
            fill="#fff"
        />
        <Defs>
            <LinearGradient
                id="paint0_linear_53_168"
                x1={16}
                y1={2}
                x2={16}
                y2={29.917}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#18ACFE" />
                <Stop offset={1} stopColor="#0163E0" />
            </LinearGradient>
        </Defs>
    </Svg>
);
export const IconGG = ({style, width, height}: iconProps) => (
    <Svg
        width={Spacing.width32}
        height={Spacing.width32}
        style={style}
        viewBox="0 0 32 32"
        fill="none">
        <Path
            d="M30.001 16.31c0-1.15-.095-1.99-.301-2.861H16.287v5.195h7.873c-.159 1.291-1.016 3.236-2.92 4.542l-.027.174 4.24 3.22.294.029c2.699-2.443 4.254-6.036 4.254-10.298z"
            fill="#4285F4"
        />
        <Path
            d="M16.286 30c3.857 0 7.095-1.244 9.46-3.391l-4.507-3.423c-1.207.825-2.826 1.4-4.953 1.4A8.584 8.584 0 018.16 18.77l-.167.014-4.41 3.344-.058.157C5.874 26.858 10.7 30 16.286 30z"
            fill="#34A853"
        />
        <Path
            d="M8.16 18.769a8.463 8.463 0 01-.476-2.77c0-.964.174-1.897.46-2.768l-.008-.185-4.465-3.399-.146.068A13.785 13.785 0 002.001 16c0 2.256.556 4.387 1.524 6.284L8.16 18.77z"
            fill="#FBBC05"
        />
        <Path
            d="M16.286 7.413c2.683 0 4.492 1.136 5.524 2.085l4.032-3.858C23.366 3.384 20.143 2 16.286 2 10.7 2 5.874 5.142 3.524 9.715l4.62 3.516c1.158-3.375 4.365-5.818 8.142-5.818z"
            fill="#EB4335"
        />
    </Svg>
);

export const IconApple = ({style, width, height}: iconProps) => (
    <Svg
        width={Spacing.width32}
        height={Spacing.width32}
        style={style}
        viewBox="0 0 32 32"
        fill="none">
        <Path
            d="M30 16c0 7.728-6.265 14-14 14S2 23.728 2 16C2 8.265 8.265 2 16 2s14 6.265 14 14z"
            fill="#283544"
        />
        <Path
            d="M22.562 12.457c-.076.045-1.895.986-1.895 3.07.086 2.38 2.295 3.213 2.333 3.213-.038.045-.334 1.136-1.21 2.28-.694.986-1.466 1.98-2.637 1.98-1.114 0-1.514-.657-2.8-.657-1.381 0-1.772.657-2.829.657-1.171 0-2-1.047-2.733-2.023-.952-1.278-1.761-3.284-1.79-5.21-.02-1.02.19-2.023.724-2.875.752-1.19 2.095-1.997 3.561-2.023 1.124-.036 2.124.719 2.81.719.657 0 1.885-.72 3.275-.72.6.001 2.2.17 3.191 1.59zm-6.561-1.792c-.2-.932.352-1.864.866-2.458.657-.72 1.695-1.207 2.59-1.207a3.334 3.334 0 01-.952 2.511c-.58.72-1.58 1.26-2.504 1.154z"
            fill="#fff"
        />
    </Svg>
);

export const IconHome = ({style, width, height,iconFillColor}: iconProps) => (
    <Svg
        width={Spacing.width24}
        height={Spacing.height24}
        viewBox="0 0 24 24"
        fill="none"
        style={style}
    >
        <Path
            d="M12 18v-3M10.07 2.82L3.14 8.37c-.78.62-1.28 1.93-1.11 2.91l1.33 7.96c.24 1.42 1.6 2.57 3.04 2.57h11.2c1.43 0 2.8-1.16 3.04-2.57l1.33-7.96c.16-.98-.34-2.29-1.11-2.91l-6.93-5.54c-1.07-.86-2.8-.86-3.86-.01z"
            stroke={iconFillColor}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export const IconProfile = ({style, width, height,iconFillColor}: iconProps) => (
    <Svg
        width={Spacing.width20}
        height={Spacing.width20}
        viewBox="0 0 20 20"
        fill="none"
    >
        <Path
            d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2a7.2 7.2 0 01-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 01-6 3.22z"
            fill={iconFillColor}
        />
    </Svg>
);

export const IconCategory = ({style, width, height,iconFillColor}: iconProps) => (
    <Svg
        width={Spacing.width24}
        height={Spacing.width24}
        viewBox="0 0 24 24"
        fill="none"
    >
        <Path
            d="M5 10h2c2 0 3-1 3-3V5c0-2-1-3-3-3H5C3 2 2 3 2 5v2c0 2 1 3 3 3zM17 10h2c2 0 3-1 3-3V5c0-2-1-3-3-3h-2c-2 0-3 1-3 3v2c0 2 1 3 3 3zM17 22h2c2 0 3-1 3-3v-2c0-2-1-3-3-3h-2c-2 0-3 1-3 3v2c0 2 1 3 3 3zM5 22h2c2 0 3-1 3-3v-2c0-2-1-3-3-3H5c-2 0-3 1-3 3v2c0 2 1 3 3 3z"
            stroke={iconFillColor}
            strokeWidth={1.5}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export const IconCart = ({style, width=Spacing.width24, height=Spacing.width24,iconFillColor}: iconProps) => (
    <Svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
    >
        <Path
            d="M7.5 7.67V6.7c0-2.25 1.81-4.46 4.06-4.67a4.5 4.5 0 014.94 4.48v1.38M9 22h6c4.02 0 4.74-1.61 4.95-3.57l.75-6C20.97 9.99 20.27 8 16 8H8c-4.27 0-4.97 1.99-4.7 4.43l.75 6C4.26 20.39 4.98 22 9 22z"
            stroke={iconFillColor}
            strokeWidth={1.5}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M15.495 12h.01M8.495 12h.008"
            stroke={iconFillColor}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export const IconSetting = ({style, width, height,iconFillColor=Colors.black}: iconProps) => (
    <Svg
        width={Spacing.width24}
        height={Spacing.width24}
        viewBox="0 0 24 24"
        fill="none"
    >
        <Path
            d="M12 15a3 3 0 100-6 3 3 0 000 6z"
            stroke={iconFillColor}
            strokeWidth={1.5}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M2 12.88v-1.76c0-1.04.85-1.9 1.9-1.9 1.81 0 2.55-1.28 1.64-2.85-.52-.9-.21-2.07.7-2.59l1.73-.99c.79-.47 1.81-.19 2.28.6l.11.19c.9 1.57 2.38 1.57 3.29 0l.11-.19c.47-.79 1.49-1.07 2.28-.6l1.73.99c.91.52 1.22 1.69.7 2.59-.91 1.57-.17 2.85 1.64 2.85 1.04 0 1.9.85 1.9 1.9v1.76c0 1.04-.85 1.9-1.9 1.9-1.81 0-2.55 1.28-1.64 2.85.52.91.21 2.07-.7 2.59l-1.73.99c-.79.47-1.81.19-2.28-.6l-.11-.19c-.9-1.57-2.38-1.57-3.29 0l-.11.19c-.47.79-1.49 1.07-2.28.6l-1.73-.99a1.899 1.899 0 01-.7-2.59c.91-1.57.17-2.85-1.64-2.85-1.05 0-1.9-.86-1.9-1.9z"
            stroke={iconFillColor}
            strokeWidth={1.5}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export const IconProfiles = ({style, width, height,iconFillColor}: iconProps) => (
    <Svg
        width={Spacing.width24}
        height={Spacing.width24}
        viewBox="0 0 24 24"
        fill="none"
    >
        <Path
            d="M12.12 13.582a.963.963 0 00-.24 0 3.27 3.27 0 01-3.16-3.27c0-1.81 1.46-3.28 3.28-3.28a3.276 3.276 0 01.12 6.55zM18.74 20.182a9.934 9.934 0 01-6.74 2.62c-2.6 0-4.96-.99-6.74-2.62.1-.94.7-1.86 1.77-2.58 2.74-1.82 7.22-1.82 9.94 0 1.07.72 1.67 1.64 1.77 2.58z"
            stroke={iconFillColor}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M12 22.802c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z"
            stroke={iconFillColor}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export const IconUserName = ({ width, height, style }: iconProps) => (
    <Svg
        width={Spacing.width80}
        height={Spacing.width80}
        viewBox="0 0 80 80"
        style={style}
        fill="none"
    >
        <G clipPath="url(#clip0_1177_15835)">
            <Rect width={80} height={80} rx={40} fill="#DDD" />
            <Path
                d="M40 18.333c-9.619 0-17.416 7.798-17.416 17.417 0 9.619 7.797 17.417 17.416 17.417 9.62 0 17.417-7.798 17.417-17.417 0-9.619-7.798-17.417-17.417-17.417zM29 58.667c-9.619 0-17.416 7.797-17.416 17.416C11.584 85.703 19.38 93.5 29 93.5h22c9.62 0 17.417-7.798 17.417-17.417 0-9.619-7.798-17.416-17.417-17.416H29z"
                fill="#EFEFEF"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_1177_15835">
                <Rect width={80} height={80} rx={40} fill="#fff" />
            </ClipPath>
        </Defs>
    </Svg>
);
export const IconNotifile = ({ width, height, style }: iconProps) => (
    <Svg
        width={Spacing.width26}
        height={Spacing.width26}
        viewBox="0 0 26 26"
        style={style}
        fill="none"
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13 3a1 1 0 10-2 0v.08a6.273 6.273 0 00-5.164 5.036l-1.375 7.331A3 3 0 007.411 19h.715a4.002 4.002 0 007.748 0h.716a3 3 0 002.949-3.553l-1.375-7.331A6.273 6.273 0 0013 3.08V3zm-1 17a2 2 0 001.732-1h-3.464A2 2 0 0012 20zm4.59-3H7.41a1 1 0 01-.983-1.184l1.375-7.332a4.272 4.272 0 018.397 0l1.374 7.332A1 1 0 0116.59 17z"
            fill={Colors.black}
        />
    </Svg>
);
export const IconSold = ({ width, height, style }: iconProps) => (
    <Svg
        width={Spacing.width15}
        height={Spacing.width15}
        viewBox="0 0 15 15"
        style={style}
        fill="none"
    >
        <Path
            d="M13.563 4.563a.604.604 0 00-.876 0L8.75 8.5 6.062 5.812a.567.567 0 00-.437-.187.567.567 0 00-.438.188l-3.75 3.75A.567.567 0 001.25 10c0 .375.25.625.625.625a.567.567 0 00.438-.188l3.312-3.312 2.688 2.688c.062.062.124.124.187.124.063.063.188.063.25.063.125 0 .313-.063.375-.188h.063l4.374-4.374a.604.604 0 000-.875z"
            fill="#000"
        />
    </Svg>
);

export const IconLeft = ({ width, height, style }: iconProps) => (
    <Svg
        width={Spacing.width24}
        height={Spacing.width24}
        viewBox="0 0 24 24"
        style={style}
        fill="none"
    >
        <Path
            d="M10 7l1.763 1.747c1.406 1.394 2.109 2.09 2.217 2.94a2.48 2.48 0 010 .626c-.108.85-.811 1.546-2.217 2.94L10 17"
            stroke="#ACACAC"
            strokeWidth={1.5}
            strokeLinecap="round"
        />
    </Svg>
);

export const IconFilter = ({ width, height, style }: iconProps) => (
    <Svg
        width={Spacing.width24}
        height={Spacing.width24}
        viewBox="0 0 24 24"
        style={style}
        fill="none"
    >
        <Path
            d="M12 17.75a.75.75 0 000-1.5v1.5zm-8-1.5a.75.75 0 000 1.5v-1.5zm8-10a.75.75 0 000 1.5v-1.5zm8 1.5a.75.75 0 000-1.5v1.5zm-8 8.5H4v1.5h8v-1.5zm0-8.5h8v-1.5h-8v1.5zM3.25 7A2.75 2.75 0 006 9.75v-1.5c-.69 0-1.25-.56-1.25-1.25h-1.5zM6 9.75A2.75 2.75 0 008.75 7h-1.5c0 .69-.56 1.25-1.25 1.25v1.5zM8.75 7A2.75 2.75 0 006 4.25v1.5c.69 0 1.25.56 1.25 1.25h1.5zM6 4.25A2.75 2.75 0 003.25 7h1.5c0-.69.56-1.25 1.25-1.25v-1.5zM20.75 17A2.75 2.75 0 0018 14.25v1.5c.69 0 1.25.56 1.25 1.25h1.5zM18 14.25A2.75 2.75 0 0015.25 17h1.5c0-.69.56-1.25 1.25-1.25v-1.5zM15.25 17A2.75 2.75 0 0018 19.75v-1.5c-.69 0-1.25-.56-1.25-1.25h-1.5zM18 19.75A2.75 2.75 0 0020.75 17h-1.5c0 .69-.56 1.25-1.25 1.25v1.5z"
            fill="#1E2029"
        />
    </Svg>
);

export const IconNoProduct = ({ width, height, style }: iconProps) => (
    <Svg
        width={Spacing.width100}
        height={Spacing.width100}
        viewBox="0 0 100 100"
        style={style}
        fill="none"
    >
        <Rect width={100} height={100} rx={4} fill="#fff" />
        <Path
            d="M8.333 16.667h83.334v16.666H8.333V16.667z"
            fill="#160B34"
            fillOpacity={0.2}
        />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.167 25c0-6.904 5.596-12.5 12.5-12.5h66.666c6.904 0 12.5 5.596 12.5 12.5v8.333a4.167 4.167 0 01-4.166 4.167V75c0 6.904-5.597 12.5-12.5 12.5H20.833c-6.903 0-12.5-5.596-12.5-12.5V37.5a4.167 4.167 0 01-4.166-4.167V25zm12.5 12.5h66.666V75a4.167 4.167 0 01-4.166 4.167H20.833A4.167 4.167 0 0116.667 75V37.5zM87.5 29.167h-75V25a4.167 4.167 0 014.167-4.167h66.666A4.167 4.167 0 0187.5 25v4.167zM37.5 50a4.167 4.167 0 000 8.333h25a4.167 4.167 0 100-8.333h-25z"
            fill="#160B34"
        />
    </Svg>
);
export const IconCart3 = ({ style, width, height }: iconProps) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 110 100" fill="none">
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.206 3.636A3.563 3.563 0 00.294 5.364L5.29 25.347l4.649 19.4c1.977 8.248 3.533 14.74 5.38 19.785 1.893 5.174 4.216 9.19 7.943 12.27.322.266.65.525.983.776 3.864 2.906 8.311 4.228 13.784 4.865 5.335.62 12.012.62 20.494.62h2.819c7.339 0 13.116 0 17.77-.471 4.767-.482 8.69-1.483 12.22-3.692a27.313 27.313 0 004.64-3.66c2.971-2.917 4.858-6.498 6.438-11.022 1.543-4.416 2.889-10.034 4.599-17.17l.1-.415c1.031-4.303 1.881-7.85 2.21-10.723.341-2.982.202-5.822-1.287-8.414a13.07 13.07 0 00-2.363-2.996c-2.174-2.052-4.903-2.849-7.882-3.212-2.87-.35-6.518-.35-10.943-.35H11.531L7.206 3.636zM42.937 61.5a3.563 3.563 0 013.563-3.562H75a3.563 3.563 0 010 7.125H46.5a3.563 3.563 0 01-3.563-3.563z"
                fill="#EFEFEF"
            />
            <Path
                d="M43.75 99.5a5 5 0 100-10 5 5 0 000 10zM73.75 99.5a5 5 0 100-10 5 5 0 000 10z"
                fill="#EFEFEF"
            />
        </Svg>
    );
};
export const IconClose = ({ style, width=Spacing.width24, height=Spacing.width24 }: iconProps) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
            <Path
                d="M19.707 5.707a1 1 0 00-1.414-1.414L12 10.586 5.707 4.293a1 1 0 00-1.414 1.414L10.586 12l-6.293 6.293a1 1 0 101.414 1.414L12 13.414l6.293 6.293a1 1 0 001.414-1.414L13.414 12l6.293-6.293z"
                fill="#464A54"
            />
        </Svg>
    );
};
export const IconUser= ({ style, width=Spacing.width24, height=Spacing.width24 }: iconProps) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
            <Path
                d="M12 2C9.38 2 7.25 4.13 7.25 6.75c0 2.57 2.01 4.65 4.63 4.74.08-.01.16-.01.22 0h.07a4.738 4.738 0 004.58-4.74C16.75 4.13 14.62 2 12 2zM17.08 14.15c-2.79-1.86-7.34-1.86-10.15 0-1.27.85-1.97 2-1.97 3.23s.7 2.37 1.96 3.21C8.32 21.53 10.16 22 12 22c1.84 0 3.68-.47 5.08-1.41 1.26-.85 1.96-1.99 1.96-3.23-.01-1.23-.7-2.37-1.96-3.21z"
                fill="#0C0507"
            />
        </Svg>
    );
};
export const IconQA= ({ style, width=Spacing.width24, height=Spacing.width24 }: iconProps) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
            <Path
                d="M11.5 2C5.708 2 1 6.713 1 12.511 1 18.198 5.443 22.801 11.235 23c.177-.022.353-.022.486 0h.155c5.659-.2 10.102-4.802 10.124-10.489C22 6.713 17.292 2 11.5 2z"
                fill="#0C0507"
            />
            <Path
                d="M8.613 13.062c0-.299.108-.56.322-.784.224-.233.49-.35.798-.35.607 0 .91.308.91.924 0 .355-.112.649-.336.882-.214.233-.471.35-.77.35-.289 0-.518-.093-.686-.28-.158-.196-.238-.443-.238-.742zm2.372 0c0-.299.107-.56.322-.784.223-.233.49-.35.797-.35.607 0 .91.308.91.924 0 .355-.111.649-.335.882-.215.233-.472.35-.77.35-.29 0-.519-.093-.687-.28-.158-.196-.237-.443-.237-.742zm2.37 0c0-.299.108-.56.322-.784.225-.233.49-.35.799-.35.606 0 .91.308.91.924 0 .355-.112.649-.336.882a1.01 1.01 0 01-.77.35c-.29 0-.518-.093-.686-.28-.16-.196-.239-.443-.239-.742z"
                fill="#fff"
            />
        </Svg>
    );
};
export const IconPassword= ({ style, width=Spacing.width24, height=Spacing.width24 }: iconProps) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
            <Path
                d="M17 9V7c0-2.8-2.2-5-5-5S7 4.2 7 7v2c-1.7 0-3 1.3-3 3v7c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3v-7c0-1.7-1.3-3-3-3zM9 7c0-1.7 1.3-3 3-3s3 1.3 3 3v2H9V7z"
                fill="#000"
            />
        </Svg>
    );
};
export const IconAbout= ({ style, width=Spacing.width24, height=Spacing.width24 }: iconProps) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
            <Path
                d="M18 2H8a4 4 0 00-4 4v12a4 4 0 004 4h10a2 2 0 002-2V4a2 2 0 00-2-2zM6 6a2 2 0 012-2h10v10H8a3.91 3.91 0 00-2 .56V6zm2 14a2 2 0 110-4h10v4H8zm2-12h4a1 1 0 100-2h-4a1 1 0 000 2z"
                fill="#000"
            />
        </Svg>
    );
};
export const IconOrder= ({ style, width=Spacing.width23, height=Spacing.width24 }: iconProps) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 23 24" fill="none">
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.455 2.061C.5 3.375.5 5.251.5 9v2c0 3.75 0 5.625.955 6.939a5 5 0 001.106 1.106C3.875 20 5.751 20 9.5 20c3.75 0 5.625 0 6.939-.955a5 5 0 001.106-1.106c.955-1.314.955-3.19.955-6.939V9c0-3.75 0-5.625-.955-6.939A5 5 0 0016.44.955C15.125 0 13.249 0 9.5 0 5.75 0 3.875 0 2.561.955A5 5 0 001.455 2.06zM5.5 5.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3zm0 4a.75.75 0 000 1.5h8a.75.75 0 000-1.5h-8zm0 4a.75.75 0 000 1.5h8a.75.75 0 000-1.5h-8z"
                fill="#1E2029"
            />
        </Svg>
    );
};
export const IconOrderBig= ({ style, width=Spacing.width100, height=Spacing.width105 }: iconProps) => {
    return (
        <Svg width={width} height={height}    viewBox="0 0 86 86" fill="none" style={style}>
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M85.75 43c0-17.811 0-26.717-4.536-32.96a23.751 23.751 0 00-5.254-5.254C69.717.25 60.81.25 43 .25c-3.985 0-7.524 0-10.688.05v.334c0 4.047.001 6.512-.336 8.639A27.312 27.312 0 019.273 31.976c-2.127.337-4.592.337-8.64.337H.302C.25 35.475.25 39.014.25 43c0 17.811 0 26.717 4.536 32.96a23.75 23.75 0 005.254 5.254C16.283 85.75 25.19 85.75 43 85.75s26.717 0 32.96-4.536a23.75 23.75 0 005.254-5.254C85.75 69.717 85.75 60.81 85.75 43zm-50.596-1.655a3.562 3.562 0 115.038-5.038l7.557 7.557 7.557-7.557a3.563 3.563 0 015.038 5.038l-7.557 7.558 7.557 7.557a3.563 3.563 0 01-5.038 5.038L47.75 53.94l-7.557 7.557a3.563 3.563 0 01-5.038-5.038l7.557-7.557-7.557-7.558z"
                fill="#EFEFEF"
            />
            <Path
                d="M24.939 8.158c.232-1.465.248-3.274.248-7.598C18.35 1.01 13.73 2.105 10.04 4.786a23.75 23.75 0 00-5.254 5.254C2.106 13.73 1.009 18.35.56 25.188c4.324-.001 6.133-.017 7.598-.249A20.188 20.188 0 0024.939 8.158z"
                fill="#EFEFEF"
            />
        </Svg>
    );
};
export const IconAddress= ({ style, width=Spacing.width24, height=Spacing.width24 }: iconProps) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
            <Path
                d="M18 4.48a8.485 8.485 0 10-12 12l5.27 5.28a1.001 1.001 0 001.42 0L18 16.43a8.45 8.45 0 000-11.95zM16.57 15L12 19.59 7.43 15a6.46 6.46 0 119.14 0zM9 7.41a4.32 4.32 0 000 6.1 4.31 4.31 0 007.36-3 4.239 4.239 0 00-1.26-3.05A4.3 4.3 0 009 7.41zm4.69 4.68a2.33 2.33 0 11.67-1.63 2.33 2.33 0 01-.72 1.63h.05z"
                fill="#000"
            />
        </Svg>
    );
};
export const IconDots = ({ width, height, style }: iconProps) => (
    <Svg width={width} height={1} viewBox="0 0 339 1" style={style} fill="none">
        <Path
            stroke="#ACACAC"
            strokeDasharray="4 4"
            d="M4.37114e-8 0.5L339 0.500029"
        />
    </Svg>
);
export const IconShop= ({ style, width=Spacing.width24, height=Spacing.width24 }: iconProps) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
            <Path
                d="M22 5H2a1 1 0 00-1 1v4a3 3 0 002 2.82V22a1 1 0 001 1h16a1 1 0 001-1v-9.18A3 3 0 0023 10V6a1 1 0 00-1-1zm-7 2h2v3a1 1 0 01-2 0V7zm-4 0h2v3a1 1 0 01-2 0V7zM7 7h2v3a1 1 0 11-2 0V7zm-3 4a1 1 0 01-1-1V7h2v3a1 1 0 01-1 1zm10 10h-4v-2a2 2 0 014 0v2zm5 0h-3v-2a4 4 0 10-8 0v2H5v-8.18a3.17 3.17 0 001-.6 3 3 0 004 0 3 3 0 004 0 3 3 0 004 0c.293.26.632.464 1 .6V21zm2-11a1 1 0 01-2 0V7h2v3zM4.3 3H20a1 1 0 100-2H4.3a1 1 0 000 2z"
                fill="white"
            />
        </Svg>
    );
};
export const IconOrderSuccess= ({ style, width=Spacing.width71, height=Spacing.width57 }: iconProps) => {
    return (
        <Svg width={width} height={height}  viewBox="0 0 71 57" fill="none">
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.75 56.568h-.001L0 31.82l11.314-11.314 13.435 13.435L58.691 0l11.313 11.314L24.75 56.569z"
                fill="#C1FCF6"
            />
        </Svg>
    );
};
