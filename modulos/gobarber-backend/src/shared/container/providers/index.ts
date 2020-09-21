import { container } from 'tsyringe';
import DiskStorageProvider from './StorageProvider/implemantatios/DiskStorageProvider';
import IStorageProvider from './StorageProvider/models/IStorageProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);
