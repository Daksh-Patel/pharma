"use client"

import React from "react"
import Link from "next/link"
import { Menu, ChevronDown } from "lucide-react"

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/tailwind-components/ui/sheet"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/tailwind-components/ui/collapsible"

import { Button } from "@/tailwind-components/ui/button"
import { HeaderMenuLists } from "@/config/headerMenuList"

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='ghost' size='icon'>
          <Menu className='w-8 min-w-8 h-8' />
        </Button>
      </SheetTrigger>

      <SheetContent side='right' className='w-72 p-6'>
        {/* Required for accessibility */}
        <SheetHeader className='mb-0'>
          <SheetTitle className='text-lg font-bold'></SheetTitle>
        </SheetHeader>

        <div className='space-y-4'>
          {HeaderMenuLists.map((menu) => {
            const isChildren = menu.children.length > 0

            if (!isChildren) {
              return (
                <Link
                  key={menu.id}
                  href={menu.href}
                  onClick={() => setOpen(false)}
                  className='block text-sm font-semibold uppercase py-2 border-b hover:text-primary transition'
                >
                  {menu.title}
                </Link>
              )
            }

            return (
              <Collapsible key={menu.id} className='border-b pb-2'>
                <CollapsibleTrigger className='flex w-full items-center justify-between text-sm font-semibold uppercase py-2'>
                  {menu.title}
                  <ChevronDown className='w-4 h-4 transition-transform data-[state=open]:rotate-180' />
                </CollapsibleTrigger>

                <CollapsibleContent className='pl-3 mt-2 space-y-2'>
                  {menu.children.map((child) => (
                    <Link
                      key={child.id}
                      href={child.href}
                      onClick={() => setOpen(false)}
                      className='block text-sm text-muted-foreground hover:text-primary transition'
                    >
                      {child.title}
                    </Link>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            )
          })}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu
