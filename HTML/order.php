<!-- Order form submit php script -->
<?php
  include ('../PHP/defines.php');
  include ('../PHP/orderFunc.php');

  $orderFunc = new orderFunc();

  $orderFunc->sendOrder();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- meta/manifest tags -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Dit is een app voor een overzicht van de pizza's bij Domino's.">
  <meta name="msapplication-TileColor" content="#AB0000">
  <meta name="theme-color" content="#AB0000">
  <link rel="icon" type="image/png" sizes="32x32", href="../images/icons/icon-512x512.png">
  <link rel="manifest" href="manifest.json">

  <title>Pizza app</title>

  <!-- CSS for material classes and google icons -->
  <link rel="stylesheet" href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  
  <!-- CSS for specific site -->
  <link rel="stylesheet" href="../CSS/orderStyle.css">
  <link rel="stylesheet" href="../CSS/Menu.css">
  <link rel="stylesheet" href="../CSS/shared.css">

  <!-- Scripts for material javascript objects -->
  <script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>
  <script>
      const MDCBanner = mdc.banner.MDCBanner;
      const MDCCheckbox = mdc.checkbox.MDCCheckbox;
      const MDCChip = mdc.chips.MDCChip;
      const MDCChipSet = mdc.chips.MDCChipSet;
      const MDCCircularProgress = mdc.circularProgress.MDCCircularProgress;
      const MDCDataTable = mdc.dataTable.MDCDataTable;
      const MDCDialog = mdc.dialog.MDCDialog;
      const MDCDrawer = mdc.drawer.MDCDrawer;
      const MDCFloatingLabel = mdc.floatingLabel.MDCFloatingLabel;
      const MDCFormField = mdc.formField.MDCFormField;
      const MDCIconButtonToggle = mdc.iconButton.MDCIconButtonToggle;
      const MDCLineRipple = mdc.lineRipple.MDCLineRipple;
      const MDCLinearProgress = mdc.linearProgress.MDCLinearProgress;
      const MDCList = mdc.list.MDCList;
      const MDCMenu = mdc.menu.MDCMenu;
      const MDCMenuSurface = mdc.menuSurface.MDCMenuSurface;
      const MDCNotchedOutline = mdc.notchedOutline.MDCNotchedOutline;
      const MDCRadio = mdc.radio.MDCRadio;
      const MDCRipple = mdc.ripple.MDCRipple;
      const MDCSegmentedButton = mdc.segmentedButton.MDCSegmentedButton;
      const MDCSelect = mdc.select.MDCSelect;
      const MDCSlider = mdc.slider.MDCSlider;
      const MDCSnackbar = mdc.snackbar.MDCSnackbar;
      const MDCSwitch = mdc.switchControl.MDCSwitch;
      const MDCTabBar = mdc.tabBar.MDCTabBar;
      const MDCTextField = mdc.textField.MDCTextField;
      const MDCTooltip = mdc.tooltip.MDCTooltip;
      const MDCTopAppBar = mdc.topAppBar.MDCTopAppBar;
  </script>

  <!-- Service worker -->
  <script>
    window.addEventListener("load", () => {
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register("service-worker.js");
        }
    });
  </script>
</head>

<body>
    <!-- Header -->
    <header class="mdc-top-app-bar">
      <div class="mdc-top-app-bar__row">
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
          <button class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button" id="menu" aria-label="Open navigation menu">menu</button>
          <a style="text-decoration: none" href="index.html">
            <span style="color: white;" class="home mdc-top-app-bar__title">Codecrust Pizzeria</span>
          </a>
        </section>
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
          <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Options">more_vert</button>
        </section>
      </div>
    </header>
    
    <!-- Menu aside -->
    <aside class="mdc-drawer mdc-drawer--modal">
      <div class="mdc-drawer__content">
        <nav class="mdc-list">
          <div class="logoContainer">
            <img class="logo" src="../images/logo.png" alt="dominos logo">
          </div>
          <a class="mdc-list-item mdc-list-item--activated" href="#" aria-current="page" tabindex="0">
            <span class="mdc-list-item__ripple"></span>
            <i class="material-icons mdc-list-item__graphic" aria-hidden="true">inbox</i>
            <span class="mdc-list-item__text">Inbox</span>
          </a>
          <a class="mdc-list-item" href="#">
            <span class="mdc-list-item__ripple"></span>
            <i class="material-icons mdc-list-item__graphic" aria-hidden="true">send</i>
            <span class="mdc-list-item__text">Outgoing</span>
          </a>
          <a class="mdc-list-item" href="#">
            <span class="mdc-list-item__ripple"></span>
            <i class="material-icons mdc-list-item__graphic" aria-hidden="true">drafts</i>
            <span class="mdc-list-item__text">Drafts</span>
          </a>
        </nav>
      </div>
    </aside>
    <div class="mdc-drawer-scrim"></div>

    <!-- Main content -->
    <main class="mdc-top-app-bar--fixed-adjust">
      <div class="topContainer">
        <img src="" alt="" class="pizzaimg">
        <div class="pizzaInfo">
          <p class="name"></p>
          <p class="price"></p>
        </div>
        <div class="orderForm">
          <form action="#" method="POST">
            <input type="hidden" name="pizza" id="pizza">
            <div class="formrow">
              <label for="name">Name</label>
              <input type="text" name="name" required>
            </div>
            <div class="formrow">
              <label for="address">Address</label>
              <input type="text" name="address" required>
            </div>
            <div class="formrow">
              <label for="phone">Phone</label>
              <input type="text" name="phone" required>
            </div>
            <div class="submit">
              <input class="orderBtn" name="order" type="submit" value="Order">
            </div>
          </form>
        </div>
      </div>
    </main>

    <!-- Order script -->
    <script src="../JS/MenuDrawer.js"></script>
    <script src="../JS/order.js"></script>
</body>
</html>