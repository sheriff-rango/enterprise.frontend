import { Component, OnDestroy, OnInit } from "@angular/core";
import { takeWhile } from "rxjs/operators";
import { NbTokenService } from "@nebular/auth";
import { NbMenuItem, NbIconLibraries } from "@nebular/theme";
import { PagesMenu } from "./pages-menu";
import { UsersService } from "../@core/backend/common/services/users.service";
import { PhoneDeviceService } from "../@services/phone-device.service";

@Component({
  selector: "ngx-pages",
  styleUrls: ["pages.component.scss"],
  templateUrl: "./pages.component.html",
})
export class PagesComponent implements OnDestroy, OnInit {
  ngOnInit(): void {
    console.log("init page component");
    this.initMenu();

    this.phoneDeviceService.init({});
  }

  menu: NbMenuItem[];
  alive: boolean = true;

  constructor(
    private pagesMenu: PagesMenu,
    private tokenService: NbTokenService,
    private iconsLibrary: NbIconLibraries,
    protected initUserService: UsersService,
    private phoneDeviceService: PhoneDeviceService
  ) {
    console.log("constructor page component");
    this.iconsLibrary.registerFontPack("fa", {
      packClass: "fa",
      iconClassPrefix: "fa",
    });
    this.initMenu();
    this.tokenService
      .tokenChange()
      .pipe(takeWhile(() => this.alive))
      .subscribe(() => {
        this.initMenu();
      });
  }

  initMenu() {
    this.pagesMenu
      .getMenu()
      .pipe(takeWhile(() => this.alive))
      .subscribe((menu) => {
        this.menu = menu;
      });
  }

  ngOnDestroy(): void {
    this.alive = false;
    this.phoneDeviceService.destroy();
  }
}
