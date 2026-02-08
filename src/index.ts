import { Client, GatewayIntentBits, Collection } from 'discord.js';
import chalk from 'chalk';
import { config} from './config/env';
import { initalizeDatabase } from './database/connection';
import { loadCommands } from './handlers/commandHandler';
import {loadEvents } from './handlers/eventHandler';
import { initializeI18n } from './i18n';
import { startAPIServer } from './api/server';
import type { Command } from './types/command';
