---
title: "Meshtastic Guide"
menu:
  main:
    name: Meshtastic Guide
    weight: 40
---

## DEF CON Firmware
Meshtastic released a proposed configuration for the DEF CON Mesh, which includes a new channel default, `DEFCONnect` with a PSK, running on the ShortTurbo preset. 

They also released a specific firmware version for DEF CON, which comes preset with the `DEFCONnect` channel and a few other cosmetic changes. This firmware is available on the [DEF CON Meshtastic Flasher](https://defcon.meshtastic.org/). 

If you don't want to flash your firmware and just want to change the channel, setup your nodes as follows:

## DEFCONnect ShortTurbo Mesh + LHC Channel, Use during DEF CON

1. ### Core Radio Settings
- Open Meshtastic app
- Go to Radio Configuration → LoRa
- Set Region: United States
- Set Preset: Short Turbo
- Set Channel Number: 31
- Set Hop Limit: 2 or 3 (keep it low!)
- Enable Event Mode if available
2. ### Add DEF CON Channels
- Add these three channels in order:
- ### Channel 0 - DEFCONnect (Primary)
  - Name:`DEFCONnect`
  - PSK: `OEu8wB3AItGBvza4YSHh+5a3LlW/dCJ+nWr7SNZMsaE=`
- ### Channel 1 - HackerComms
  - Name: `HackerComms`
  - PSK: `6IzsaoVhx1ETWeWuu0dUWMLqItvYJLbRzwgTAKCfvtY=`
- ### Channel 2 - NodeChat
  - Name: `NodeChat`
  - PSK: `TiIdi8MJG+IRnIkS8iUZXRU+MHuGtuzEasOWXp4QndU=`
- ### Add the LHC channel to your node manually
  - Channel Name: `LHC`
  - Pre-shared Key: `wvve6Rcv8WEdn5vOqwt3MdZlMtFHzNQGrjkbBTdhYbk=`
  - Role: `Secondary`

### Need Help?
Visit us at Lonely Hackers Club during DEF CON.

## What's Meshtastic?

Meshtastic is an open source project using inexpensive, battery-powered LoRa radios to send messages and GPS locations over long distances. Nodes relay each other's messages, forming a mesh network that extends range. Many people bring their nodes to DEF CON, so connect and test the mesh with them.

## Get started with Meshtastic

### 1. Meshtastic device

Build your own or buy pre-built. Any board with an **ESP32-S3** or **nRF52480** and an **SX1262 LoRa radio** works; see [Meshtastic Supported Hardware](https://meshtastic.org/docs/hardware/devices/) for options.

Recommended: **Heltec LoRa V3** or **Lilygo T3-S3/T-Beam Supreme** (ESP32-S3), or **Lilygo T-Echo** (nRF52). nRF52 devices have longer battery life but no WiFi.

Available from AliExpress or Amazon. ***Avoid original ESP32 devices, they are deprecated and may not support the latest firmware.***

**You'll also need:**
- Compatible battery (18650 or flat LiPo)
- USB cable for flashing and configuration
- Computer (Windows, Mac, or Linux)
- Android or iOS phone with the Meshtastic app
- (Optional) Better antenna for improved range; DIYMalls 915MHz 4x pack is a tested option

## I got a node, now what?

### Installation

Flash firmware using the [DEF CON Meshtastic Flasher](https://defcon.meshtastic.org/) or [Regular Meshtastic Flasher](https://flasher.meshtastic.org/): select your board, choose a version (**2.7 alpha or newer**), and click "Flash". See [Flashing Firmware](https://meshtastic.org/docs/getting-started/flashing-firmware/) for more detail.

### Initial Configuration

1. Plug in your antenna and power on the node.
2. Open the Meshtastic app; your device should appear in the Nodes section. Tap to pair (check the display for the Bluetooth code, or the device logs if there's no display).
3. Set the LoRa region to **US**. The device will reboot and connect to the mesh.
4. In Settings > Device Configuration > User, set your Long Name and Short Name.

For other options, see the [Initial Configuration](https://meshtastic.org/docs/getting-started/initial-config/) page.

## Let's test the Mesh

Send a message to the Primary Channel. Nearby nodes will `acknowledge` it, and others will be visible in the Nodes section of the app.


## Other optimizations to consider

DEF CON has ***a lot of nodes***. These settings help the mesh perform better:

- **Use `client` role** (not `router` or `router_late`): router modes take rebroadcast priority and burden the network when misused.
- **Reduce position broadcast** to 30 min in Settings > Position. Disable internal GPS and use app location to save battery.
- **Disable Telemetry** in Settings > Telemetry if your node has sensors, to reduce unnecessary mesh traffic.
