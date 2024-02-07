"use client";
import React from "react";
import styles from "./cube3d.module.scss";
import Link from "next/link";
import Image from "next/image";

interface Icube3DProps {
  wallColor?: string;
  topColor?: string;
  bottomColor?: string;
  label?: string;
  topIcon?: React.ReactDOM;
  iconInternal?: { width: number; height: number; url: string };
  skew?: number | string;
  size?: string | number;
}

export default function Cube3d({ wallColor, topColor, bottomColor, label, topIcon, iconInternal, size, skew }:Icube3DProps) {
  const IconComponent = topIcon || DefaultIcon;

  // export default function CubeBase({ icon, topColor, wallColor, shadowColor, size }: CubeBaseProps) {
  const wallDefault = "rgba(0, 236, 0, 0.5)";

  const dynamicStyles: React.CSSProperties = {
    "--wallColor": wallColor || wallDefault,
    "--topColor": topColor || wallColor,
    "--shadowColor": bottomColor || wallColor || wallDefault,
    "--size": size || "50px",
    "--skew": .5,
  };

  return (
      <div className={styles.cubeIconContainer} style={dynamicStyles}>
        <div className={styles.cube}>
          <div className={styles.top}>
            <div className={styles.iconContainer}>
              <IconComponent />
            </div>
          </div>
          <div className={styles.faceContainer}>
            <span className={styles.span0}></span>
            <span className={styles.span1}></span>
            <span className={styles.span2}></span>
            <span className={styles.span3}></span>
          </div>
          <div className={styles.bottom}></div>
          <div className={styles.floor}>
            <Image className={styles.image} src={iconInternal.url} width={iconInternal.width} height={iconInternal.height} alt="" />
          </div>
        </div>
        <div className={styles.label}>{label}</div>
      </div>
  );
}

const DefaultIcon = () => <span></span>;
