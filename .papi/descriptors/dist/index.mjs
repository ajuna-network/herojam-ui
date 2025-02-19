// .papi/descriptors/src/wnd.ts
var toBinary = (() => {
  const table = new Uint8Array(128);
  for (let i = 0; i < 64; i++) table[i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i * 4 - 205] = i;
  return (base64) => {
    const n = base64.length, bytes = new Uint8Array((n - Number(base64[n - 1] === "=") - Number(base64[n - 2] === "=")) * 3 / 4 | 0);
    for (let i2 = 0, j = 0; i2 < n; ) {
      const c0 = table[base64.charCodeAt(i2++)], c1 = table[base64.charCodeAt(i2++)];
      const c2 = table[base64.charCodeAt(i2++)], c3 = table[base64.charCodeAt(i2++)];
      bytes[j++] = c0 << 2 | c1 >> 4;
      bytes[j++] = c1 << 4 | c2 >> 2;
      bytes[j++] = c2 << 6 | c3;
    }
    return bytes;
  };
})();
var descriptorValues = import("./descriptors-DFJ775W4.mjs").then((module) => module["Wnd"]);
var metadataTypes = import("./metadataTypes-HGVT2MZS.mjs").then(
  (module) => toBinary("default" in module ? module.default : module)
);
var asset = {};
var _allDescriptors = { descriptors: descriptorValues, metadataTypes, asset };
var wnd_default = _allDescriptors;

// .papi/descriptors/src/pas.ts
var toBinary2 = (() => {
  const table = new Uint8Array(128);
  for (let i = 0; i < 64; i++) table[i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i * 4 - 205] = i;
  return (base64) => {
    const n = base64.length, bytes = new Uint8Array((n - Number(base64[n - 1] === "=") - Number(base64[n - 2] === "=")) * 3 / 4 | 0);
    for (let i2 = 0, j = 0; i2 < n; ) {
      const c0 = table[base64.charCodeAt(i2++)], c1 = table[base64.charCodeAt(i2++)];
      const c2 = table[base64.charCodeAt(i2++)], c3 = table[base64.charCodeAt(i2++)];
      bytes[j++] = c0 << 2 | c1 >> 4;
      bytes[j++] = c1 << 4 | c2 >> 2;
      bytes[j++] = c2 << 6 | c3;
    }
    return bytes;
  };
})();
var descriptorValues2 = import("./descriptors-DFJ775W4.mjs").then((module) => module["Pas"]);
var metadataTypes2 = import("./metadataTypes-HGVT2MZS.mjs").then(
  (module) => toBinary2("default" in module ? module.default : module)
);
var asset2 = {};
var _allDescriptors2 = { descriptors: descriptorValues2, metadataTypes: metadataTypes2, asset: asset2 };
var pas_default = _allDescriptors2;

// .papi/descriptors/src/aju.ts
var toBinary3 = (() => {
  const table = new Uint8Array(128);
  for (let i = 0; i < 64; i++) table[i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i * 4 - 205] = i;
  return (base64) => {
    const n = base64.length, bytes = new Uint8Array((n - Number(base64[n - 1] === "=") - Number(base64[n - 2] === "=")) * 3 / 4 | 0);
    for (let i2 = 0, j = 0; i2 < n; ) {
      const c0 = table[base64.charCodeAt(i2++)], c1 = table[base64.charCodeAt(i2++)];
      const c2 = table[base64.charCodeAt(i2++)], c3 = table[base64.charCodeAt(i2++)];
      bytes[j++] = c0 << 2 | c1 >> 4;
      bytes[j++] = c1 << 4 | c2 >> 2;
      bytes[j++] = c2 << 6 | c3;
    }
    return bytes;
  };
})();
var descriptorValues3 = import("./descriptors-DFJ775W4.mjs").then((module) => module["Aju"]);
var metadataTypes3 = import("./metadataTypes-HGVT2MZS.mjs").then(
  (module) => toBinary3("default" in module ? module.default : module)
);
var asset3 = {};
var _allDescriptors3 = { descriptors: descriptorValues3, metadataTypes: metadataTypes3, asset: asset3 };
var aju_default = _allDescriptors3;

// .papi/descriptors/src/ajusage.ts
var toBinary4 = (() => {
  const table = new Uint8Array(128);
  for (let i = 0; i < 64; i++) table[i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i * 4 - 205] = i;
  return (base64) => {
    const n = base64.length, bytes = new Uint8Array((n - Number(base64[n - 1] === "=") - Number(base64[n - 2] === "=")) * 3 / 4 | 0);
    for (let i2 = 0, j = 0; i2 < n; ) {
      const c0 = table[base64.charCodeAt(i2++)], c1 = table[base64.charCodeAt(i2++)];
      const c2 = table[base64.charCodeAt(i2++)], c3 = table[base64.charCodeAt(i2++)];
      bytes[j++] = c0 << 2 | c1 >> 4;
      bytes[j++] = c1 << 4 | c2 >> 2;
      bytes[j++] = c2 << 6 | c3;
    }
    return bytes;
  };
})();
var descriptorValues4 = import("./descriptors-DFJ775W4.mjs").then((module) => module["Ajusage"]);
var metadataTypes4 = import("./metadataTypes-HGVT2MZS.mjs").then(
  (module) => toBinary4("default" in module ? module.default : module)
);
var asset4 = {};
var _allDescriptors4 = { descriptors: descriptorValues4, metadataTypes: metadataTypes4, asset: asset4 };
var ajusage_default = _allDescriptors4;

// .papi/descriptors/src/ajudev.ts
var toBinary5 = (() => {
  const table = new Uint8Array(128);
  for (let i = 0; i < 64; i++) table[i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i * 4 - 205] = i;
  return (base64) => {
    const n = base64.length, bytes = new Uint8Array((n - Number(base64[n - 1] === "=") - Number(base64[n - 2] === "=")) * 3 / 4 | 0);
    for (let i2 = 0, j = 0; i2 < n; ) {
      const c0 = table[base64.charCodeAt(i2++)], c1 = table[base64.charCodeAt(i2++)];
      const c2 = table[base64.charCodeAt(i2++)], c3 = table[base64.charCodeAt(i2++)];
      bytes[j++] = c0 << 2 | c1 >> 4;
      bytes[j++] = c1 << 4 | c2 >> 2;
      bytes[j++] = c2 << 6 | c3;
    }
    return bytes;
  };
})();
var descriptorValues5 = import("./descriptors-DFJ775W4.mjs").then((module) => module["Ajudev"]);
var metadataTypes5 = import("./metadataTypes-HGVT2MZS.mjs").then(
  (module) => toBinary5("default" in module ? module.default : module)
);
var asset5 = {};
var _allDescriptors5 = { descriptors: descriptorValues5, metadataTypes: metadataTypes5, asset: asset5 };
var ajudev_default = _allDescriptors5;

// .papi/descriptors/src/casinojam.ts
var toBinary6 = (() => {
  const table = new Uint8Array(128);
  for (let i = 0; i < 64; i++) table[i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i * 4 - 205] = i;
  return (base64) => {
    const n = base64.length, bytes = new Uint8Array((n - Number(base64[n - 1] === "=") - Number(base64[n - 2] === "=")) * 3 / 4 | 0);
    for (let i2 = 0, j = 0; i2 < n; ) {
      const c0 = table[base64.charCodeAt(i2++)], c1 = table[base64.charCodeAt(i2++)];
      const c2 = table[base64.charCodeAt(i2++)], c3 = table[base64.charCodeAt(i2++)];
      bytes[j++] = c0 << 2 | c1 >> 4;
      bytes[j++] = c1 << 4 | c2 >> 2;
      bytes[j++] = c2 << 6 | c3;
    }
    return bytes;
  };
})();
var descriptorValues6 = import("./descriptors-DFJ775W4.mjs").then((module) => module["Casinojam"]);
var metadataTypes6 = import("./metadataTypes-HGVT2MZS.mjs").then(
  (module) => toBinary6("default" in module ? module.default : module)
);
var asset6 = {};
var _allDescriptors6 = { descriptors: descriptorValues6, metadataTypes: metadataTypes6, asset: asset6 };
var casinojam_default = _allDescriptors6;

// .papi/descriptors/src/common-types.ts
import { _Enum } from "polkadot-api";
var DigestItem = _Enum;
var Phase = _Enum;
var DispatchClass = _Enum;
var BagsListListListError = _Enum;
var TokenError = _Enum;
var ArithmeticError = _Enum;
var TransactionalError = _Enum;
var IndicesEvent = _Enum;
var BalanceStatus = _Enum;
var TransactionPaymentEvent = _Enum;
var StakingRewardDestination = _Enum;
var StakingForcing = _Enum;
var OffencesEvent = _Enum;
var SessionEvent = _Enum;
var GrandpaEvent = _Enum;
var RecoveryEvent = _Enum;
var VestingEvent = _Enum;
var PreimageEvent = _Enum;
var WestendRuntimeProxyType = _Enum;
var ElectionProviderMultiPhaseEvent = _Enum;
var ElectionProviderMultiPhaseElectionCompute = _Enum;
var ElectionProviderMultiPhasePhase = _Enum;
var BagsListEvent = _Enum;
var NominationPoolsPoolState = _Enum;
var NominationPoolsCommissionClaimPermission = _Enum;
var ConvictionVotingVoteAccountVote = _Enum;
var PreimagesBounded = _Enum;
var XcmV3Junctions = _Enum;
var XcmV3Junction = _Enum;
var XcmV3JunctionNetworkId = _Enum;
var XcmV3JunctionBodyId = _Enum;
var XcmV2JunctionBodyPart = _Enum;
var XcmV3MultiassetAssetId = _Enum;
var ParachainsParasEvent = _Enum;
var ParachainsHrmpEvent = _Enum;
var ParachainsDisputesEvent = _Enum;
var ParachainsDisputeLocation = _Enum;
var ParachainsDisputeResult = _Enum;
var CommonParasRegistrarEvent = _Enum;
var CommonSlotsEvent = _Enum;
var CommonAuctionsEvent = _Enum;
var PolkadotRuntimeCommonAssignedSlotsEvent = _Enum;
var PolkadotRuntimeParachainsCoretimeEvent = _Enum;
var XcmV3MultiassetFungibility = _Enum;
var XcmV3MultiassetAssetInstance = _Enum;
var XcmV3MaybeErrorCode = _Enum;
var XcmV2OriginKind = _Enum;
var XcmV2MultiassetWildFungibility = _Enum;
var XcmV3WeightLimit = _Enum;
var ParachainsInclusionAggregateMessageOrigin = _Enum;
var ParachainsInclusionUmpQueueId = _Enum;
var RootTestingEvent = _Enum;
var PolkadotRuntimeCommonIdentityMigratorEvent = _Enum;
var BabeDigestsNextConfigDescriptor = _Enum;
var BabeAllowedSlots = _Enum;
var BabeDigestsPreDigest = _Enum;
var BalancesTypesReasons = _Enum;
var PreimagePalletHoldReason = _Enum;
var WestendRuntimeRuntimeFreezeReason = _Enum;
var NominationPoolsPalletFreezeReason = _Enum;
var TransactionPaymentReleases = _Enum;
var GrandpaStoredState = _Enum;
var IdentityJudgement = _Enum;
var IdentityData = _Enum;
var Version = _Enum;
var DispatchRawOrigin = _Enum;
var WestendRuntimeGovernanceOriginsPalletCustomOriginsOrigin = _Enum;
var ParachainsOrigin = _Enum;
var PreimageOldRequestStatus = _Enum;
var PreimageRequestStatus = _Enum;
var NominationPoolsClaimPermission = _Enum;
var ConvictionVotingVoteVoting = _Enum;
var VotingConviction = _Enum;
var TraitsScheduleDispatchTime = _Enum;
var TreasuryPaymentState = _Enum;
var PolkadotPrimitivesV6ExecutorParamsExecutorParam = _Enum;
var PolkadotPrimitivesV6PvfPrepKind = _Enum;
var PvfExecKind = _Enum;
var ValidityAttestation = _Enum;
var PolkadotPrimitivesV6DisputeStatement = _Enum;
var PolkadotPrimitivesV6ValidDisputeStatementKind = _Enum;
var InvalidDisputeStatementKind = _Enum;
var PolkadotRuntimeParachainsSchedulerCommonAssignment = _Enum;
var ParachainsParasParaLifecycle = _Enum;
var UpgradeGoAhead = _Enum;
var UpgradeRestriction = _Enum;
var SlashingOffenceKind = _Enum;
var BrokerCoretimeInterfaceCoreAssignment = _Enum;
var MultiSigner = _Enum;
var CommonCrowdloanLastContribution = _Enum;
var XcmV3Response = _Enum;
var XcmV3TraitsError = _Enum;
var XcmV4Response = _Enum;
var XcmPalletVersionMigrationStage = _Enum;
var ReferendaTypesCurve = _Enum;
var MultiAddress = _Enum;
var BalancesAdjustmentDirection = _Enum;
var StakingPalletConfigOpBig = _Enum;
var StakingPalletConfigOp = _Enum;
var GrandpaEquivocation = _Enum;
var MultiSignature = _Enum;
var NominationPoolsBondExtra = _Enum;
var NominationPoolsConfigOp = _Enum;
var XcmV3Instruction = _Enum;
var XcmV3MultiassetMultiAssetFilter = _Enum;
var XcmV3MultiassetWildMultiAsset = _Enum;
var XcmV4Instruction = _Enum;
var XcmV4AssetAssetFilter = _Enum;
var XcmV4AssetWildAsset = _Enum;
var PolkadotRuntimeCommonAssignedSlotsSlotLeasePeriodStart = _Enum;
var TransactionValidityUnknownTransaction = _Enum;
var TransactionValidityTransactionSource = _Enum;
var OccupiedCoreAssumption = _Enum;
var MmrPrimitivesError = _Enum;
var StakingEvent = _Enum;
var VersionedLocatableAsset = _Enum;
var XcmVersionedLocation = _Enum;
var XcmV2MultilocationJunctions = _Enum;
var XcmV2Junction = _Enum;
var XcmV2NetworkId = _Enum;
var XcmV2BodyId = _Enum;
var ConvictionVotingEvent = _Enum;
var CommonClaimsEvent = _Enum;
var BountiesEvent = _Enum;
var ChildBountiesEvent = _Enum;
var NominationPoolsEvent = _Enum;
var ParachainsInclusionEvent = _Enum;
var XcmV4TraitsOutcome = _Enum;
var XcmVersionedAssets = _Enum;
var XcmV2MultiassetAssetId = _Enum;
var XcmV2MultiassetFungibility = _Enum;
var XcmV2MultiassetAssetInstance = _Enum;
var AssetRateEvent = _Enum;
var PolkadotRuntimeOriginCaller = _Enum;
var GovernanceOrigin = _Enum;
var XcmPalletOrigin = _Enum;
var ClaimsStatementKind = _Enum;
var BountiesBountyStatus = _Enum;
var ChildBountyStatus = _Enum;
var PolkadotRuntimeParachainsSchedulerPalletCoreOccupied = _Enum;
var XcmPalletQueryStatus = _Enum;
var XcmVersionedResponse = _Enum;
var XcmV2Response = _Enum;
var XcmV2TraitsError = _Enum;
var XcmVersionedAssetId = _Enum;
var XcmVersionedXcm = _Enum;
var XcmV2Instruction = _Enum;
var XcmV2MultiAssetFilter = _Enum;
var XcmV2MultiassetWildMultiAsset = _Enum;
var XcmV2WeightLimit = _Enum;
var TransactionValidityError = _Enum;
var TransactionValidityInvalidTransaction = _Enum;
var CoreState = _Enum;
var CandidateEvent = _Enum;
var WestendRuntimeRuntimeHoldReason = _Enum;
export {
  ArithmeticError,
  AssetRateEvent,
  BabeAllowedSlots,
  BabeDigestsNextConfigDescriptor,
  BabeDigestsPreDigest,
  BagsListEvent,
  BagsListListListError,
  BalanceStatus,
  BalancesAdjustmentDirection,
  BalancesTypesReasons,
  BountiesBountyStatus,
  BountiesEvent,
  BrokerCoretimeInterfaceCoreAssignment,
  CandidateEvent,
  ChildBountiesEvent,
  ChildBountyStatus,
  ClaimsStatementKind,
  CommonAuctionsEvent,
  CommonClaimsEvent,
  CommonCrowdloanLastContribution,
  CommonParasRegistrarEvent,
  CommonSlotsEvent,
  ConvictionVotingEvent,
  ConvictionVotingVoteAccountVote,
  ConvictionVotingVoteVoting,
  CoreState,
  DigestItem,
  DispatchClass,
  DispatchRawOrigin,
  ElectionProviderMultiPhaseElectionCompute,
  ElectionProviderMultiPhaseEvent,
  ElectionProviderMultiPhasePhase,
  GovernanceOrigin,
  GrandpaEquivocation,
  GrandpaEvent,
  GrandpaStoredState,
  IdentityData,
  IdentityJudgement,
  IndicesEvent,
  InvalidDisputeStatementKind,
  MmrPrimitivesError,
  MultiAddress,
  MultiSignature,
  MultiSigner,
  NominationPoolsBondExtra,
  NominationPoolsClaimPermission,
  NominationPoolsCommissionClaimPermission,
  NominationPoolsConfigOp,
  NominationPoolsEvent,
  NominationPoolsPalletFreezeReason,
  NominationPoolsPoolState,
  OccupiedCoreAssumption,
  OffencesEvent,
  ParachainsDisputeLocation,
  ParachainsDisputeResult,
  ParachainsDisputesEvent,
  ParachainsHrmpEvent,
  ParachainsInclusionAggregateMessageOrigin,
  ParachainsInclusionEvent,
  ParachainsInclusionUmpQueueId,
  ParachainsOrigin,
  ParachainsParasEvent,
  ParachainsParasParaLifecycle,
  Phase,
  PolkadotPrimitivesV6DisputeStatement,
  PolkadotPrimitivesV6ExecutorParamsExecutorParam,
  PolkadotPrimitivesV6PvfPrepKind,
  PolkadotPrimitivesV6ValidDisputeStatementKind,
  PolkadotRuntimeCommonAssignedSlotsEvent,
  PolkadotRuntimeCommonAssignedSlotsSlotLeasePeriodStart,
  PolkadotRuntimeCommonIdentityMigratorEvent,
  PolkadotRuntimeOriginCaller,
  PolkadotRuntimeParachainsCoretimeEvent,
  PolkadotRuntimeParachainsSchedulerCommonAssignment,
  PolkadotRuntimeParachainsSchedulerPalletCoreOccupied,
  PreimageEvent,
  PreimageOldRequestStatus,
  PreimagePalletHoldReason,
  PreimageRequestStatus,
  PreimagesBounded,
  PvfExecKind,
  RecoveryEvent,
  ReferendaTypesCurve,
  RootTestingEvent,
  SessionEvent,
  SlashingOffenceKind,
  StakingEvent,
  StakingForcing,
  StakingPalletConfigOp,
  StakingPalletConfigOpBig,
  StakingRewardDestination,
  TokenError,
  TraitsScheduleDispatchTime,
  TransactionPaymentEvent,
  TransactionPaymentReleases,
  TransactionValidityError,
  TransactionValidityInvalidTransaction,
  TransactionValidityTransactionSource,
  TransactionValidityUnknownTransaction,
  TransactionalError,
  TreasuryPaymentState,
  UpgradeGoAhead,
  UpgradeRestriction,
  ValidityAttestation,
  Version,
  VersionedLocatableAsset,
  VestingEvent,
  VotingConviction,
  WestendRuntimeGovernanceOriginsPalletCustomOriginsOrigin,
  WestendRuntimeProxyType,
  WestendRuntimeRuntimeFreezeReason,
  WestendRuntimeRuntimeHoldReason,
  XcmPalletOrigin,
  XcmPalletQueryStatus,
  XcmPalletVersionMigrationStage,
  XcmV2BodyId,
  XcmV2Instruction,
  XcmV2Junction,
  XcmV2JunctionBodyPart,
  XcmV2MultiAssetFilter,
  XcmV2MultiassetAssetId,
  XcmV2MultiassetAssetInstance,
  XcmV2MultiassetFungibility,
  XcmV2MultiassetWildFungibility,
  XcmV2MultiassetWildMultiAsset,
  XcmV2MultilocationJunctions,
  XcmV2NetworkId,
  XcmV2OriginKind,
  XcmV2Response,
  XcmV2TraitsError,
  XcmV2WeightLimit,
  XcmV3Instruction,
  XcmV3Junction,
  XcmV3JunctionBodyId,
  XcmV3JunctionNetworkId,
  XcmV3Junctions,
  XcmV3MaybeErrorCode,
  XcmV3MultiassetAssetId,
  XcmV3MultiassetAssetInstance,
  XcmV3MultiassetFungibility,
  XcmV3MultiassetMultiAssetFilter,
  XcmV3MultiassetWildMultiAsset,
  XcmV3Response,
  XcmV3TraitsError,
  XcmV3WeightLimit,
  XcmV4AssetAssetFilter,
  XcmV4AssetWildAsset,
  XcmV4Instruction,
  XcmV4Response,
  XcmV4TraitsOutcome,
  XcmVersionedAssetId,
  XcmVersionedAssets,
  XcmVersionedLocation,
  XcmVersionedResponse,
  XcmVersionedXcm,
  aju_default as aju,
  ajudev_default as ajudev,
  ajusage_default as ajusage,
  casinojam_default as casinojam,
  pas_default as pas,
  wnd_default as wnd
};
