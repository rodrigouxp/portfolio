"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import { Url } from "next/dist/shared/lib/router/router";
import { url } from "inspector";

export default function PrimaryButton({ label }: { label: string }) {
  // resolver fonte
  return <button className={`title5heavy ${styles.primaryButton}`}>{label}</button>;
} 


