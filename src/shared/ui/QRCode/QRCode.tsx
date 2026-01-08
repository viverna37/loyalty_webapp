import { QRCodeCanvas } from "qrcode.react";

type QRCodeProps = {
    value: string;
    size?: number;
};

export function QRCode({ value, size = 350 }: QRCodeProps) {
    return (
        <QRCodeCanvas
            value={value}
            size={size}
            bgColor="transparent"
            fgColor="#ffffff"
            level="M"
            includeMargin
        />
    );
}
