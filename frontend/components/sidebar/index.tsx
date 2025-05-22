"use client"
import type { LucideIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { Moon, Sun, ChevronDown } from "lucide-react"
import { usePathname } from "next/navigation"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"

import * as LucideIcons from "lucide-react"

type SidebarItemType = {
  title: string
  icon?: string
  href?: string
  active?: boolean
  badge?: string | number
  children?: SidebarItemType[]
  color?: string
}

type SidebarSectionType = {
  title: string
  items: SidebarItemType[]
}

type SidebarDataType = {
  logo: {
    text: string
    icon?: string
  }
  sections: SidebarSectionType[]
}

const DynamicIcon = ({ name, className }: { name?: string; className?: string }) => {
  if (!name) return null

  const IconComponent = (LucideIcons as unknown as Record<string, LucideIcon>)[name]

  if (!IconComponent) {
    return null
  }

  return <IconComponent className={className} />
}

function markActive(items, pathname) {
  return items.map(item => {
    const isActive = item.href === pathname;
    let children = item.children;
    if (children) {
      children = markActive(children, pathname);
    }
    return {
      ...item,
      active: isActive || (children && children.some(child => child.active)),
      children,
    };
  });
}

export function DynamicSidebar({ data }: { data: SidebarDataType }) {
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  // Processa os dados para marcar os itens ativos conforme o pathname
  const processedData = {
    ...data,
    sections: data.sections.map(section => ({
      ...section,
      items: markActive(section.items, pathname),
    })),
  }

  const renderSidebarItem = (item: SidebarItemType, index: number) => {
    if (item.children && item.children.length > 0) {
      return (
        <Collapsible key={index} defaultOpen={item.active} className="w-full">
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton className={cn(item.active && "bg-sidebar-accent text-sidebar-accent-foreground")}>
                {item.icon && <DynamicIcon name={item.icon} className="h-4 w-4" />}
                <span>{item.title}</span>
                <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                {item.badge && (
                  <div className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-md bg-primary px-1 text-xs font-medium text-primary-foreground">
                    {item.badge}
                  </div>
                )}
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="ml-6 mt-1 space-y-1">
                {item.children.map((child, childIndex) => renderSidebarItem(child, childIndex))}
              </div>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
      )
    }

    return (
      <SidebarMenuItem key={index}>
        <SidebarMenuButton
          asChild={!!item.href}
          className={cn(item.active && "bg-sidebar-accent text-sidebar-accent-foreground")}
        >
          {item.href ? (
            <a href={item.href} className="flex items-center gap-2">
              {item.icon &&
                (item.color ? (
                  <div className={`flex h-5 w-5 items-center justify-center rounded-full ${item.color}`}>
                    <DynamicIcon name={item.icon} className="h-3 w-3 text-white" />
                  </div>
                ) : (
                  <DynamicIcon name={item.icon} className="h-4 w-4" />
                ))}
              <span>{item.title}</span>
              {item.badge && (
                <div className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-md bg-primary px-1 text-xs font-medium text-primary-foreground">
                  {item.badge}
                </div>
              )}
              {item.active && <div className="ml-auto h-2 w-2 rounded-full bg-green-500"></div>}
            </a>
          ) : (
            <>
              {item.icon && <DynamicIcon name={item.icon} className="h-4 w-4" />}
              <span>{item.title}</span>
              {item.badge && (
                <div className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-md bg-primary px-1 text-xs font-medium text-primary-foreground">
                  {item.badge}
                </div>
              )}
              {item.active && <div className="ml-auto h-2 w-2 rounded-full bg-green-500"></div>}
            </>
          )}
        </SidebarMenuButton>
      </SidebarMenuItem>
    )
  }

  return (
    <Sidebar className="border-r border-border">
      <SidebarHeader className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {data.logo.icon ? (
              <div className="flex h-8 items-center justify-center rounded-md text-primary">
                <DynamicIcon name={data.logo.icon} className="h-5 w-5" />
              </div>
            ) : (
              <div className="flex h-8 items-center justify-center rounded-md text-primary">
                <span className="font-bold">{data.logo.text.charAt(0)}</span>
              </div>
            )}
            <span className="font-semibold">{data.logo.text}</span>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="h-8 w-8"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </SidebarHeader>

      <SidebarContent>
        {processedData.sections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            {sectionIndex > 0 && <SidebarSeparator className="my-2" />}
            <SidebarGroup>
              <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground">
                {section.title}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>{section.items.map((item, itemIndex) => renderSidebarItem(item, itemIndex))}</SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </div>
        ))}
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} CVx
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
