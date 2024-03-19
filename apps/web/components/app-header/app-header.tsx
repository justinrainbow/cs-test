import AppLogo from '../app-logo/app-logo';
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import NextLink from 'next/link';
import { link as linkStyles } from '@nextui-org/theme';
import clsx from 'clsx';
import { siteConfig } from '../../config/site';

export default function AppHeader() {
  return (
    <Navbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <AppLogo />
            <span className="font-bold text-inherit">{siteConfig.appName}</span>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden sm:flex gap-4">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                color="foreground"
                href={item.href}
                className={clsx(
                  linkStyles({ color: 'foreground' }),
                  'data-[active=true]:text-primary data-[active=true]:font-medium'
                )}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>
    </Navbar>
  );
}
