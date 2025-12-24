"use client"
import React from "react";
import ContactSection from "@/components/Contact";
import { Footer7 } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";
import ContactClient from "./ContactClient";

export default function ConatactUS(){
    return(
    <>
        <Navbar></Navbar>
        <Suspense fallback={null}>
        <ContactClient />
      </Suspense>
        <ContactSection></ContactSection>
        <Footer7></Footer7>
        </>
    )
}