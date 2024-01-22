import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from '@/assets/logo.png';
import { Button } from "./ui/button";


export default function Navbar() {
  return (
    <header className="shadow-sm">
      <nav className="m-auto flex max-w-5xl items-center justify-between px-3 py-5">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={logo}
            alt="Flow Jobs logo"
            width={100}
            height={100}
          />
          <span className="text-xl font-bold tracking-tight">
            Flow Jobs
          </span>
        </Link>
        <Button asChild>
            <Link href="/jobs/new">Post a job</Link>
        </Button>
      </nav>
    </header>
  );
}
