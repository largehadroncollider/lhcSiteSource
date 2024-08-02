---
title: "Meshtastic"
menu:
  main:
    name: Meshtastic
    weight: 70
---

## TL;DR: Updates August 2 2024

Meshtastic released a proposed configuration for the DEF CON Mesh, which includes a new channel default, `DEFCONnect` with a PSK, running on the ShortFast preset. 

It's assumed that due to the amount of nodes, the ShortFast preset will be more efficient for the network. We also expect that LongFast will get congested.

They also released a specific firmware version for DEF CON, which comes preset with the `DEFCONnect` channel. It also includes a few other cosmetic changes. This firmware is available on the [DEF CON Meshtastic Flasher](https://defcon.meshtastic.org/). 

If you don't want to flash your firmware and just want to change the channel, you can use the QR code below to change your channel between the default and the DEFCONnect channel.

### Default LongFast Mesh + LHC Channel, Use before DEF CON

<img src="/qr-code-default.png" width="400" height="400" alt="Meshtastic QR Code for Default LongFast" />

<div style="text-align: center;">
<a href=https://meshtastic.org/e/#CgcSAQE6AgggChcSEMSWXxEzf_LVVi5jI8UQhWUaA2xoYxIMCAE4AUADSAFQHmgB>Tap to load Default LongFast Mesh + LHC Channel</a>
</div>

### DEFCONnect ShortFast Mesh + LHC Channel, Use during DEF CON

<img src="/qr-code-defcon-mesh.png" width="400" height="400" alt="Meshtastic QR Code for Default LongFast" />

<div style="text-align: center;">
<a href=https://meshtastic.org/e/#CjISIDhLvMAdwCLRgb82uGEh4fuWty5Vv3Qifp1q-0jWTLGhGgpERUZDT05uZWN0OgIIDQoXEhDEll8RM3_y1VYuYyPFEIVlGgNsaGMSEQgBEAY4AUADSAFQHmgBwAYB>Tap to load DEFCONnect ShortFast Mesh + LHC Channel</a>
</div>

### Add the LHC channel to your node manually
 
- Channel Name: `lhc`
- Pre-shared Key: `xJZfETN/8tVWLmMjxRCFZQ==`
- Role: `Secondary`

### Talk to our bot 

Reach our bot by sending a direct message to the main node `LHC` ID `!dda1843b`, you can ask about your signal quality and other info. Check it out!

## What's Meshtastic?

Meshtastic is a project that lets you use inexpensive, battery powered, long range radios to send messages and GPS locations between devices in the field. It is a fully open source project that is based on the ESP32 hardware platform. The radios are based on the LoRa radio standard, which is a low power, long range digital radio standard. 

The radios can be used to send text messages, GPS locations, and other data between devices, and together they create a mesh network, which allows devices to relay messages between each other to extend the range of the network.

Many other people will bring their Meshtastic nodes to DEF CON, and you can use your Meshtastic device to communicate with them, and test the mesh.

## Okay that sounds cool, what do I need to get started?

To get started with Meshtastic, you will need a few things:

### 1. Meshtastic device

You can either build your own device using the open source hardware and software, or you can buy a pre-built device. 

Any board with an **ESP32-S3** or **nRF52480** and an **SX1262 LoRa radio** should work, check the [Meshtastic Suported Hardware](https://meshtastic.org/docs/hardware/devices/) for other options. 

On the ESP32-S3 based devices, we recommend the **Heltec Lora V3**, or the **Lilygo T3-S3 or T-Beam Supreme**. On the nRF52 based devices, we recommend the **Lilygo T-Echo**.

The two main differences between ESP32-S3 and nRF52 based devices are nRF52 devices have a longer battery life but lack WiFi.

You can buy the devices from online retailers like AliExpress or Amazon.

***Keep in mind that devices using the original ESP32 are getting deprecated by Meshtastic and may not work with the latest firmware, so we suggest to get a device with an ESP32-S3.***

### 2. Battery

Depending on the node you choose, you will need a battery to power the device, find a compatible battery that fits your choice of node, 18650 batteries or flat LiPo batteries are common choices.

### 3. USB cable

You will need a USB cable to connect the device to your computer to flash the firmware and configure the device.

### 4. Computer

You will need a computer to flash the firmware and configure the device. The Meshtastic software is compatible with Windows, Mac, and Linux.

### 5. Phone

You will need a phone to connect to the device and send messages. The Meshtastic app is available for Android and iOS.

### 6. Better antenna (optional). 

The stock antennas on the devices are not necessarily great, so you may want to upgrade to a better antenna to improve the range and performance of the device. A tested alternative is DIYMalls 915Mhz 4x antenna pack.

## I got a node, now what?

Once you have your Meshtastic device, you will need to flash the firmware onto the device, and configure it to connect to the Meshtastic network.

### Installation

If you're using one of the supported ESP32 devices, you can head to the [Meshtastic Flasher](https://flasher.meshtastic.org/), select your board, the version of the firmware you want to flash, and click "Flash". 

We recommend to **version 2.4.0 alpha or newer*** as they introduced fixes for large meshes.

More info is available on the [Flashing Firmware](https://meshtastic.org/docs/getting-started/flashing-firmware/) section.

After flashing the firmware, you will need to configure the device to connect to the Meshtastic network. You can do this using the Meshtastic app on your phone, or by connecting to the device using a web browser.

### Initial Configuration

**Plug an antenna to your node, and power it on**

Open the Meshtastic app on your phone, and in the Nodes section you should see your Meshtastic device listed.

Click on the device to pair. If the device has a display, it will show the Bluetooth pairing code, if not, you can find the code in the device logs.

Once paired, you can configure the device and set the LoRa region, before the node can connect to the network.

Set the LoRa region to **US**, after which your device will reboot and connect to the Meshtastic network.

For other options for the initial configuration, check the [Initial Configuration](https://meshtastic.org/docs/getting-started/initial-config/) page.

### Name your device

Now that your node is configured to enter the Mesh, you can set a name on your device.

In Settings, under Device Configuration in the User section you can set the Long Name and Short Name of your device. 

## Let's test the Mesh

Once you've joined the Mesh, other nodes around you will be visible in the Nodes section of the app. In the Message section you can send messages to a channel or directly to a node. 

Head to the Primary Channel, and send a message. If there's any other nodes around you, you should see the message being `acknowledged` by other nodes. 


## Other optimizations to consider

From our experience at DC31, there will be ***a lot of nodes*** at DEF CON. You can do a few things to optimize your configuration, which will help the mesh network to perform better.

#### ALWAYS USE THE `client` ROLE

Meshtastic has introduced other roles for the node, like `router` or `router/client`. These modes are aimed for well placed nodes that can help the network to relay messages, but they can be a burden on the network if not used correctly, as they take priority when rebroadcasting messages.

For this reason we insist that you leave your node configured with `client` role, as this will help the network to perform better.

#### Reduce position broadcast, disable internal GPS

In the Meshtastic settingss, in the Position section, you can reduce the Broadcast Interval to a more sensible value. I suggest 30 minutes, but you can set it to whatever you like. Keep in mind that position broadcasts are sent to all nodes in the mesh, so reducing the interval will reduce the traffic on the network.

You can also disable your node's internal GPS, and use the location provided by the app. This will help your battery life.

#### Disable Telemetry

Some nodes have integrated sensors, and Meshtastic broadcasts this info to the mesh. This can be a burden on the network, so you can disable this in the Telemetry section of the settings.
