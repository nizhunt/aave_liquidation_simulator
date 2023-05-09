/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ChainlinkProxyPriceProviderInterface extends ethers.utils.Interface {
  functions: {
    "isOwner()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "setAssetSources(address[],address[])": FunctionFragment;
    "setFallbackOracle(address)": FunctionFragment;
    "getAssetPrice(address)": FunctionFragment;
    "getAssetsPrices(address[])": FunctionFragment;
    "getSourceOfAsset(address)": FunctionFragment;
    "getFallbackOracle()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "isOwner", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setAssetSources",
    values: [string[], string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setFallbackOracle",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getAssetPrice",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getAssetsPrices",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getSourceOfAsset",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getFallbackOracle",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAssetSources",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFallbackOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAssetPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAssetsPrices",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSourceOfAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFallbackOracle",
    data: BytesLike
  ): Result;

  events: {
    "AssetSourceUpdated(address,address)": EventFragment;
    "FallbackOracleUpdated(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AssetSourceUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FallbackOracleUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class ChainlinkProxyPriceProvider extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ChainlinkProxyPriceProviderInterface;

  functions: {
    /**
     * Returns true if the caller is the current owner.
     */
    isOwner(
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    /**
     * Returns true if the caller is the current owner.
     */
    "isOwner()"(
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    /**
     * Returns the address of the current owner.
     */
    owner(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * Returns the address of the current owner.
     */
    "owner()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.     * > Note: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.     * > Note: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * External function called by the Aave governance to set or replace sources of assets
     * @param _assets The addresses of the assets
     * @param _sources The address of the source of each asset
     */
    setAssetSources(
      _assets: string[],
      _sources: string[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * External function called by the Aave governance to set or replace sources of assets
     * @param _assets The addresses of the assets
     * @param _sources The address of the source of each asset
     */
    "setAssetSources(address[],address[])"(
      _assets: string[],
      _sources: string[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * Sets the fallbackOracle - Callable only by the Aave governance
     * @param _fallbackOracle The address of the fallbackOracle
     */
    setFallbackOracle(
      _fallbackOracle: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * Sets the fallbackOracle - Callable only by the Aave governance
     * @param _fallbackOracle The address of the fallbackOracle
     */
    "setFallbackOracle(address)"(
      _fallbackOracle: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * Gets an asset price by address
     * @param _asset The asset address
     */
    getAssetPrice(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    /**
     * Gets an asset price by address
     * @param _asset The asset address
     */
    "getAssetPrice(address)"(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    /**
     * Gets a list of prices from a list of assets addresses
     * @param _assets The list of assets addresses
     */
    getAssetsPrices(
      _assets: string[],
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber[];
    }>;

    /**
     * Gets a list of prices from a list of assets addresses
     * @param _assets The list of assets addresses
     */
    "getAssetsPrices(address[])"(
      _assets: string[],
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber[];
    }>;

    /**
     * Gets the address of the source for an asset address
     * @param _asset The address of the asset
     * @returns address The address of the source
     */
    getSourceOfAsset(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * Gets the address of the source for an asset address
     * @param _asset The address of the asset
     * @returns address The address of the source
     */
    "getSourceOfAsset(address)"(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * Gets the address of the fallback oracle
     * @returns address The addres of the fallback oracle
     */
    getFallbackOracle(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * Gets the address of the fallback oracle
     * @returns address The addres of the fallback oracle
     */
    "getFallbackOracle()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;
  };

  /**
   * Returns true if the caller is the current owner.
   */
  isOwner(overrides?: CallOverrides): Promise<boolean>;

  /**
   * Returns true if the caller is the current owner.
   */
  "isOwner()"(overrides?: CallOverrides): Promise<boolean>;

  /**
   * Returns the address of the current owner.
   */
  owner(overrides?: CallOverrides): Promise<string>;

  /**
   * Returns the address of the current owner.
   */
  "owner()"(overrides?: CallOverrides): Promise<string>;

  /**
   * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.     * > Note: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
   */
  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  /**
   * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.     * > Note: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
   */
  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  /**
   * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
   */
  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
   */
  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * External function called by the Aave governance to set or replace sources of assets
   * @param _assets The addresses of the assets
   * @param _sources The address of the source of each asset
   */
  setAssetSources(
    _assets: string[],
    _sources: string[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * External function called by the Aave governance to set or replace sources of assets
   * @param _assets The addresses of the assets
   * @param _sources The address of the source of each asset
   */
  "setAssetSources(address[],address[])"(
    _assets: string[],
    _sources: string[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * Sets the fallbackOracle - Callable only by the Aave governance
   * @param _fallbackOracle The address of the fallbackOracle
   */
  setFallbackOracle(
    _fallbackOracle: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * Sets the fallbackOracle - Callable only by the Aave governance
   * @param _fallbackOracle The address of the fallbackOracle
   */
  "setFallbackOracle(address)"(
    _fallbackOracle: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * Gets an asset price by address
   * @param _asset The asset address
   */
  getAssetPrice(_asset: string, overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * Gets an asset price by address
   * @param _asset The asset address
   */
  "getAssetPrice(address)"(
    _asset: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  /**
   * Gets a list of prices from a list of assets addresses
   * @param _assets The list of assets addresses
   */
  getAssetsPrices(
    _assets: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  /**
   * Gets a list of prices from a list of assets addresses
   * @param _assets The list of assets addresses
   */
  "getAssetsPrices(address[])"(
    _assets: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  /**
   * Gets the address of the source for an asset address
   * @param _asset The address of the asset
   * @returns address The address of the source
   */
  getSourceOfAsset(_asset: string, overrides?: CallOverrides): Promise<string>;

  /**
   * Gets the address of the source for an asset address
   * @param _asset The address of the asset
   * @returns address The address of the source
   */
  "getSourceOfAsset(address)"(
    _asset: string,
    overrides?: CallOverrides
  ): Promise<string>;

  /**
   * Gets the address of the fallback oracle
   * @returns address The addres of the fallback oracle
   */
  getFallbackOracle(overrides?: CallOverrides): Promise<string>;

  /**
   * Gets the address of the fallback oracle
   * @returns address The addres of the fallback oracle
   */
  "getFallbackOracle()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    /**
     * Returns true if the caller is the current owner.
     */
    isOwner(overrides?: CallOverrides): Promise<boolean>;

    /**
     * Returns true if the caller is the current owner.
     */
    "isOwner()"(overrides?: CallOverrides): Promise<boolean>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<string>;

    /**
     * Returns the address of the current owner.
     */
    "owner()"(overrides?: CallOverrides): Promise<string>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.     * > Note: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.     * > Note: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * External function called by the Aave governance to set or replace sources of assets
     * @param _assets The addresses of the assets
     * @param _sources The address of the source of each asset
     */
    setAssetSources(
      _assets: string[],
      _sources: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * External function called by the Aave governance to set or replace sources of assets
     * @param _assets The addresses of the assets
     * @param _sources The address of the source of each asset
     */
    "setAssetSources(address[],address[])"(
      _assets: string[],
      _sources: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Sets the fallbackOracle - Callable only by the Aave governance
     * @param _fallbackOracle The address of the fallbackOracle
     */
    setFallbackOracle(
      _fallbackOracle: string,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Sets the fallbackOracle - Callable only by the Aave governance
     * @param _fallbackOracle The address of the fallbackOracle
     */
    "setFallbackOracle(address)"(
      _fallbackOracle: string,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Gets an asset price by address
     * @param _asset The asset address
     */
    getAssetPrice(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Gets an asset price by address
     * @param _asset The asset address
     */
    "getAssetPrice(address)"(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Gets a list of prices from a list of assets addresses
     * @param _assets The list of assets addresses
     */
    getAssetsPrices(
      _assets: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    /**
     * Gets a list of prices from a list of assets addresses
     * @param _assets The list of assets addresses
     */
    "getAssetsPrices(address[])"(
      _assets: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    /**
     * Gets the address of the source for an asset address
     * @param _asset The address of the asset
     * @returns address The address of the source
     */
    getSourceOfAsset(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<string>;

    /**
     * Gets the address of the source for an asset address
     * @param _asset The address of the asset
     * @returns address The address of the source
     */
    "getSourceOfAsset(address)"(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<string>;

    /**
     * Gets the address of the fallback oracle
     * @returns address The addres of the fallback oracle
     */
    getFallbackOracle(overrides?: CallOverrides): Promise<string>;

    /**
     * Gets the address of the fallback oracle
     * @returns address The addres of the fallback oracle
     */
    "getFallbackOracle()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    AssetSourceUpdated(
      asset: string | null,
      source: string | null
    ): EventFilter;

    FallbackOracleUpdated(fallbackOracle: string | null): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimateGas: {
    /**
     * Returns true if the caller is the current owner.
     */
    isOwner(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns true if the caller is the current owner.
     */
    "isOwner()"(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the address of the current owner.
     */
    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.     * > Note: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.     * > Note: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    /**
     * External function called by the Aave governance to set or replace sources of assets
     * @param _assets The addresses of the assets
     * @param _sources The address of the source of each asset
     */
    setAssetSources(
      _assets: string[],
      _sources: string[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    /**
     * External function called by the Aave governance to set or replace sources of assets
     * @param _assets The addresses of the assets
     * @param _sources The address of the source of each asset
     */
    "setAssetSources(address[],address[])"(
      _assets: string[],
      _sources: string[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    /**
     * Sets the fallbackOracle - Callable only by the Aave governance
     * @param _fallbackOracle The address of the fallbackOracle
     */
    setFallbackOracle(
      _fallbackOracle: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    /**
     * Sets the fallbackOracle - Callable only by the Aave governance
     * @param _fallbackOracle The address of the fallbackOracle
     */
    "setFallbackOracle(address)"(
      _fallbackOracle: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    /**
     * Gets an asset price by address
     * @param _asset The asset address
     */
    getAssetPrice(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Gets an asset price by address
     * @param _asset The asset address
     */
    "getAssetPrice(address)"(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Gets a list of prices from a list of assets addresses
     * @param _assets The list of assets addresses
     */
    getAssetsPrices(
      _assets: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Gets a list of prices from a list of assets addresses
     * @param _assets The list of assets addresses
     */
    "getAssetsPrices(address[])"(
      _assets: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Gets the address of the source for an asset address
     * @param _asset The address of the asset
     * @returns address The address of the source
     */
    getSourceOfAsset(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Gets the address of the source for an asset address
     * @param _asset The address of the asset
     * @returns address The address of the source
     */
    "getSourceOfAsset(address)"(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Gets the address of the fallback oracle
     * @returns address The addres of the fallback oracle
     */
    getFallbackOracle(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Gets the address of the fallback oracle
     * @returns address The addres of the fallback oracle
     */
    "getFallbackOracle()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * Returns true if the caller is the current owner.
     */
    isOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Returns true if the caller is the current owner.
     */
    "isOwner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Returns the address of the current owner.
     */
    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.     * > Note: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.     * > Note: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * External function called by the Aave governance to set or replace sources of assets
     * @param _assets The addresses of the assets
     * @param _sources The address of the source of each asset
     */
    setAssetSources(
      _assets: string[],
      _sources: string[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * External function called by the Aave governance to set or replace sources of assets
     * @param _assets The addresses of the assets
     * @param _sources The address of the source of each asset
     */
    "setAssetSources(address[],address[])"(
      _assets: string[],
      _sources: string[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * Sets the fallbackOracle - Callable only by the Aave governance
     * @param _fallbackOracle The address of the fallbackOracle
     */
    setFallbackOracle(
      _fallbackOracle: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * Sets the fallbackOracle - Callable only by the Aave governance
     * @param _fallbackOracle The address of the fallbackOracle
     */
    "setFallbackOracle(address)"(
      _fallbackOracle: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * Gets an asset price by address
     * @param _asset The asset address
     */
    getAssetPrice(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Gets an asset price by address
     * @param _asset The asset address
     */
    "getAssetPrice(address)"(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Gets a list of prices from a list of assets addresses
     * @param _assets The list of assets addresses
     */
    getAssetsPrices(
      _assets: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Gets a list of prices from a list of assets addresses
     * @param _assets The list of assets addresses
     */
    "getAssetsPrices(address[])"(
      _assets: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Gets the address of the source for an asset address
     * @param _asset The address of the asset
     * @returns address The address of the source
     */
    getSourceOfAsset(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Gets the address of the source for an asset address
     * @param _asset The address of the asset
     * @returns address The address of the source
     */
    "getSourceOfAsset(address)"(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Gets the address of the fallback oracle
     * @returns address The addres of the fallback oracle
     */
    getFallbackOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Gets the address of the fallback oracle
     * @returns address The addres of the fallback oracle
     */
    "getFallbackOracle()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
