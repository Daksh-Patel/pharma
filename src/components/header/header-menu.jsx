"use client"

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/tailwind-components/ui/navigation-menu"
import { HeaderMenuLists } from "@/config/headerMenuList"

const ListItem = ({ title, children, href, ...props }) => {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href} className='font-semibold'>
          <div className='flex flex-col gap-1 text-sm'>
            <div className='font-semibold leading-5'>{title}</div>
            <div className='text-muted-foreground line-clamp-2'>{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

const HeaderMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {HeaderMenuLists.map((link) => {
          const isChildren = link.children.length > 0

          if (!isChildren) {
            return (
              <NavigationMenuItem key={link.id}>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link
                    href={link.href}
                    className='menuLink hover:bg-white focus:bg-white hover:data-[state=open]:bg-white font-semibold uppercase'
                  >
                    {link.title}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            )
          }

          return (
            <NavigationMenuItem className='hidden md:flex' key={link.id}>
              <NavigationMenuTrigger className='menuLink hover:bg-white focus:bg-white hover:data-[state=open]:bg-white font-semibold uppercase'>
                {link.title}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className='w-50'>
                  {link.children.map((component) => (
                    <ListItem
                      key={component.id}
                      title={component.title}
                      href={component.href}
                    />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default HeaderMenu
