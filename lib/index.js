"use strict";
      
      const colors = {
        reset: "\x1b[0m",
        bold: "\x1b[1m",
        cyan: "\x1b[36m",
        red: "\x1b[31m"
      };
      
      // --- تعديل الحقوق هنا بدقة ---
      console.log(`${colors.bold}${colors.cyan}Made By | Ibrahim${colors.reset}`);
      console.log(`${colors.bold}${colors.cyan}Copyright (C) - ${colors.reset}${colors.bold}${colors.red}Baileys - Modified By Ibrahim${colors.reset}`);
      // ----------------------------
      
      var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() { return m[k]; } };
        }
        Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }));
