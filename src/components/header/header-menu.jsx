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
import { cn } from "@/lib/utils"

const ListItem = React.forwardRef(
  ({ className, title, children, href, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            href={href}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className='text-sm font-semibold leading-none'>{title}</div>
            {children && (
              <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
                {children}
              </p>
            )}
          </Link>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

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
                    className='menuLink hover:bg-white focus:bg-white data-[state=open]:bg-white font-semibold uppercase'
                  >
                    {link.title}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            )
          }

          return (
            <NavigationMenuItem className='hidden md:flex' key={link.id}>
              <NavigationMenuTrigger className='menuLink hover:bg-white focus:bg-white data-[state=open]:bg-white font-semibold uppercase'>
                {link.title}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className='grid w-100 gap-3 p-4 md:w-125 md:grid-cols-2 lg:w-150'>
                  {link.children.map((component) => (
                    <ListItem
                      key={component.id}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
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
