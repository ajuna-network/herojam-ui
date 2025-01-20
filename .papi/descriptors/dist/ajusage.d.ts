import { StorageDescriptor, PlainDescriptor, TxDescriptor, RuntimeDescriptor, Enum, QueryFromPalletsDef, TxFromPalletsDef, EventsFromPalletsDef, ErrorsFromPalletsDef, ConstFromPalletsDef, SS58String, FixedSizeBinary, Binary, FixedSizeArray } from "polkadot-api";
import { I5sesotjlssv2d, Iffmde3ekjedi9, I4mddgoa69c0a2, Ife27cp71opec6, I95g6i7ilua7lq, Ieniouoqkq4icf, Phase, Ibgl04rn6nbfm6, Ic5m5lp1oioo8r, GrandpaStoredState, I7pe2me3i3vtn9, I9jd27rnpm8ttv, I3geksg000c171, I1q8tnt1cluu5j, I8ds64oj6581v0, Ia7pdug7cdsg8g, I9bin2jc70qt6q, TransactionPaymentReleases, I3qklfjubrljqh, Iag3f1hum3p4c8, I7svnfko10tq2e, I4s6jkha20aoh0, I2brm5b9jij1st, I78s05f59eoi8b, I199nnq793ql30, Iaere0445mg91r, I99bb69usss9gs, Ia2lhg7l2hilo3, Iegmj7n48sc3am, Icgljjb6j82uhn, Ie9j1itogtv7p5, I6mhebgj62g585, I3vhcedhm4hpvm, I526daka7j7b17, Ifanv2kvm586s4, I5rsgtofmn5lli, Idned7t7knml6b, I2itl2k1j2q8nf, I9i2qnsi9tt4st, I56u24ncejr5kt, I1evsr8hplu1lg, I910puuahutflf, I4nfjdef0ibh44, I74af64m08r6as, I9bhbof2vim227, I6ouflveob4eli, I775lbh1002e7f, I9p9lq3rej5bhc, Iag146hmjgqfgj, I8uo3fpd3bcc6f, PreimageOldRequestStatus, PreimageRequestStatus, I4pact7n2e9a0i, Iepbsvlk3qceij, I5r70ks82kp6jd, I8a3fkp2jhb3he, I7m7jfq6avgoub, I1sm563u0c9vca, I5g2vv0ckl2m8b, If5qosgf4kc0ce, Iffrb8plvofj1a, I6f3f327e3k6hl, Icj2nb69liuu24, I4m5utiuhsse9r, Ic1suif0iej5as, Ialfslsm83ief, Idqvgv9ec5j9ok, I11o1lb9439n82, I3jqtuu2q04qhu, I7ni4sa58l6l0v, I3rer8a0o0uf4s, I9da88a5i664uj, I3ur7d7so87s5l, Iotnkqlev5olf, Id32h28hjj1tch, I7vid11d51cf9q, Id21bivdb9t470, In7a38730s6qs, If15el53dd76v9, I9s0ave7t0vnrk, Ic6nglu2db2c36, I4q39t5hn830vp, I8ofcg5rbj0g2c, I4adgbll7gku4i, I6pjjpfvhvcfru, I9pj91mj79qekl, I39uah9nss64h9, Ik64dknsq7k08, Ib51vk42m1po4n, Idcr6u6361oad9, I3a5kuu5t5jj3g, I2hviml3snvhhn, I4ktuaksf5i1gk, I9bqtpv2ii35mp, I9j7pagd6d4bda, I2h9pmio37r7fb, Ibmr18suc9ikh9, I9iq22t0burs89, I5u8olqbbvfnvf, I5utcetro501ir, Ic357tcepuvo5c, I2rnoam876ruhj, Ic5b47dj4coa3r, Ib3qnc19gu633c, Ifira6u9hi7cu1, I72tqocvdoqfff, I2i27f3sfmvc05, I1nlrtd1epki2d, I3abtumcmempjs, Id81m8flopt8ha, I8hff7chabggkd, I49i39mtj1ivbs, Ifkr2kcak2vto1, I1ju6r8q0cs9jt, I4kpeq6j7cd5bu, I5na1ka76k6811, I59mhdb9omdqfa, I9vl5kpk0fpakt, I717jt61hu19b4, I7f7v8192r1lmq, I14u52veq53dmr, I8ajr5e1kfvl54, Id4pbsr0s25b4d, I38jfk5li8iang, Iehvtsrbvgnid1, I6pldd8r2oqal4, I2dtrijkm5601t, I2ev73t79f46tb, Ib2obgji960euh, Icnrv1mfbd3in1, Icm9m0qeemu66d, I6qq5nnbjegi8u, I666bl2fqjkejo, I1moso5oagpiea, Ibeb4n9vpjefp3, Id7murq9s9fg6h, Ied9mja4bq7va8, I4f7jul8ljs54r, I5agg650597e49, Ibot4i7a9t6oo8, Id9uqtigc0il3v, I3hsuol7rtl0bj, I3v9h9f3mpm1l8, I9mnj4k4u8ls2c, I2kt2u1flctk2q, Ied3m3aqhkq594, I72peohofj8cck, I8k3rnvpeeh4hv, Icdhos1edq8qto, Ids1p0p6296skt, I5n4sebgkfr760, I9aua630pmra10, Ifs1i5fk9cqvr6, I5vhuhs9932hg5, Icce3d0juut105, Ieg3fd8p4pkt10, I8kg5ll427kfqq, I467333262q1l9, Ic6cqd9g0t65v0, I2kds5jji7slh8, Ia9mkdf6l44shb, I9l2s4klu0831o, I2ctrt5nqb8o7c, I711qahikocb1c, I6o1er683vod1j, Id6gojh30v9ib2, Ide1bahhh47lj9, Ic68lsi7chpv5k, Iek0boln8pgnko, I452bkd71b385t, I2mk62irjfqdo1, I9pnrh0ioo3e3p, Ie5l999tf7t2te, I8ojjnpnhtsad6, I3lj33btcqlb1i, I707m7edh0jft8, I2j5sqe1l974kn, I2eb501t8s6hsq, Ianmuoljk2sk1u, I4pbesk8pob2g3, I1s393tlvlj3g2, I9km4hmndb2752, Ideaemvoneh309, I3d9o9d7epp66v, I5ic95hlo4ac50, Ifuikepqo3n4sb, I5ka8cs4a1hbgg, I82nfqfkd48n10, I1jm8m1rh9e20v, I3o5j3bli1pd8e, Ibou4u1engb441, Id6nbvqoqdj4o2, I95iqep3b8snn9, I27v1tss76333e, I79d0gjumllf3p, Icbccs0ug47ilf, Ic2rp6bfvg2rn6, Ificn2o9elqq3p, Ie1gqkgo8q4gsu, I7efh0hns6gbqe, Ichp4337m7saae, Ig6b9m3jdcffq, Ifed8uh0vbjcgd, Ibch0l0v1nqcdq, If814pe6non0j8, I1egbk0tvjrlu0, I18psftbrg8l20, I9hbmjepu2be8h, Idgsge7c4e6tn1, Ia5le7udkgbaq9, I20t8kds2svicr, I9afo9k5pbihaa, I2t9qken3l1bc, Ia82mnkmeo2rhc, I8ea275nuik3ks, I855j4i3kr8ko1, I5768ac424h061, Icv68aq8841478, Ic262ibdoec56a, Iflcfm9b6nlmdd, Ijrsf4mnp3eka, Id5fm4p8lj5qgi, I8tjvj9uq4b7hi, I4cbvqmqadhrea, I3qt1hgg4djhgb, I4fooe9dun9o0t, Ier2cke86dqbr2, I88ff3u4dpivk, I33cp947glv1ks, Ic9om1gmmqu7rq, I5hfov2b68ppb6, Ibthhb2m9vneds, Iaitn5bqfacj7k, If4ebvclj2ugvi, Ieduc1e6frq8rb, I9h6gbtabovtm4, Ifnsa0dkkpf465, I65dtqr2egjbc3, Ibqj3vg5s5lk0c, I6l73u513p8rna, Iefqmt2htu1dlu, If8bgtgqrchjtu, Idusmq77988cmt, I4uo49pmivhb33, Ift6f10887nk72, I7qc53b1tvqjg2, I2b9fnvlgehfdo, Iak7fhrgb9jnnq, I8iksqi3eani0a, I16enopmju1p0q, I43kq8qudg7pq9, I76riseemre533, Ie5v6njpckr05b, I38bmcrmh852rk, I4hcillge8de5f, I8usdc6tg7829p, I3peh714diura8, I62ffgu6q2478o, I10r7il4gvbcae, I2c00i2bngegk9, Iet7kfijhihjik, I2vrbos7ogo6ps, Iffeo46j957abe, I4ljshcevmm3p2, I3rpaaf2gaumt, I5rtkmhm2dng4u, Icgaqheh7v8itg, Ia3c82eadg79bj, Ienusoeb625ftq, Iep1lmt6q3s6r3, I1fac16213rie2, Ifjt77oc391o43, Itvt1jsipv0lc, Ick3mveut33f44, I2rg5btjrsqec0, Ibdqerrooruuq9, I8u2ba9jeiu6q0, I7ieadb293k6b4, Ifcjalo8vtb9vt, I8oc1ui5us5hik, I2ur0oeqg495j8, I7f2f3co93gefl, Iep27ialq4a7o7, Iasu5jvoqr43mv, I954a6r6d3u4mk, I5qolde99acmd1, Ifc9sivp82b43c, Ifcq4qi7fa4vci, If1co0pilmi7oq, Iae74gjak1qibn, I3escdojpj0551, Ibbiemldf16hc1, I1o0nv6o4hvf0g, I2likojp7pd978, I1c84mmo1rgd9l, I2tkqdqiomgb0q, I3lbfq5fgdpulr, Idd0agfql4ht2e, I2me9817djdkpb, I880p4chnat358, Ifvfk4kssvhjro, I2ldqvlo3lagih, I8tlu1l9183dl2, Idm6okauo300t5, I1h3i3hv0od20s, I3c88rdia20kf3, I7ormhs43si3dq, Ic2rqhn799ohav, Iaqet9jc3ihboe, Ic952bubvq4k7d, I2v50gu3s1aqk6, Iabpgqcjikia83, I3i5slh4rot5vn, If7uv525tdvv7a, Itom7fk49o0c9, I2an1fs2eiebjp, TransactionValidityTransactionSource, Iajbob6uln5jct, Icerf8h8pdu8ss, I9puqgoda8ofk4, I6spmpef2c7svf, Iei2mvq0mjvt81, Ie9sr1iqcg3cgm, I1mqgk2tmnn9i2, I6lr8sctk0bi4e, Im8avfv272npt } from "./common-types";
type AnonymousEnum<T extends {}> = T & {
    __anonymous: true;
};
type MyTuple<T> = [T, ...T[]];
type SeparateUndefined<T> = undefined extends T ? undefined | Exclude<T, undefined> : T;
type Anonymize<T> = SeparateUndefined<T extends FixedSizeBinary<infer L> ? number extends L ? Binary : FixedSizeBinary<L> : T extends string | number | bigint | boolean | void | undefined | null | symbol | Uint8Array | Enum<any> ? T : T extends AnonymousEnum<infer V> ? Enum<V> : T extends MyTuple<any> ? {
    [K in keyof T]: T[K];
} : T extends [] ? [] : T extends FixedSizeArray<infer L, infer T> ? number extends L ? Array<T> : FixedSizeArray<L, T> : {
    [K in keyof T & string]: T[K];
}>;
type IStorage = {
    System: {
        /**
         * The full account information for a particular account ID.
         */
        Account: StorageDescriptor<[Key: SS58String], Anonymize<I5sesotjlssv2d>, false, never>;
        /**
         * Total extrinsics count for the current block.
         */
        ExtrinsicCount: StorageDescriptor<[], number, true, never>;
        /**
         * Whether all inherents have been applied.
         */
        InherentsApplied: StorageDescriptor<[], boolean, false, never>;
        /**
         * The current weight for the block.
         */
        BlockWeight: StorageDescriptor<[], Anonymize<Iffmde3ekjedi9>, false, never>;
        /**
         * Total length (in bytes) for all extrinsics put together, for the current block.
         */
        AllExtrinsicsLen: StorageDescriptor<[], number, true, never>;
        /**
         * Map of block numbers to block hashes.
         */
        BlockHash: StorageDescriptor<[Key: number], FixedSizeBinary<32>, false, never>;
        /**
         * Extrinsics data for the current block (maps an extrinsic's index to its data).
         */
        ExtrinsicData: StorageDescriptor<[Key: number], Binary, false, never>;
        /**
         * The current block number being processed. Set by `execute_block`.
         */
        Number: StorageDescriptor<[], number, false, never>;
        /**
         * Hash of the previous block.
         */
        ParentHash: StorageDescriptor<[], FixedSizeBinary<32>, false, never>;
        /**
         * Digest of the current block, also part of the block header.
         */
        Digest: StorageDescriptor<[], Anonymize<I4mddgoa69c0a2>, false, never>;
        /**
         * Events deposited for the current block.
         *
         * NOTE: The item is unbound and should therefore never be read on chain.
         * It could otherwise inflate the PoV size of a block.
         *
         * Events have a large in-memory size. Box the events to not go out-of-memory
         * just in case someone still reads them from within the runtime.
         */
        Events: StorageDescriptor<[], Anonymize<Ife27cp71opec6>, false, never>;
        /**
         * The number of events in the `Events<T>` list.
         */
        EventCount: StorageDescriptor<[], number, false, never>;
        /**
         * Mapping between a topic (represented by T::Hash) and a vector of indexes
         * of events in the `<Events<T>>` list.
         *
         * All topic vectors have deterministic storage locations depending on the topic. This
         * allows light-clients to leverage the changes trie storage tracking mechanism and
         * in case of changes fetch the list of events of interest.
         *
         * The value has the type `(BlockNumberFor<T>, EventIndex)` because if we used only just
         * the `EventIndex` then in case if the topic has the same contents on the next block
         * no notification will be triggered thus the event might be lost.
         */
        EventTopics: StorageDescriptor<[Key: FixedSizeBinary<32>], Anonymize<I95g6i7ilua7lq>, false, never>;
        /**
         * Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
         */
        LastRuntimeUpgrade: StorageDescriptor<[], Anonymize<Ieniouoqkq4icf>, true, never>;
        /**
         * True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
         */
        UpgradedToU32RefCount: StorageDescriptor<[], boolean, false, never>;
        /**
         * True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
         * (default) if not.
         */
        UpgradedToTripleRefCount: StorageDescriptor<[], boolean, false, never>;
        /**
         * The execution phase of the block.
         */
        ExecutionPhase: StorageDescriptor<[], Phase, true, never>;
        /**
         * `Some` if a code upgrade has been authorized.
         */
        AuthorizedUpgrade: StorageDescriptor<[], Anonymize<Ibgl04rn6nbfm6>, true, never>;
    };
    Timestamp: {
        /**
         * The current time for the current block.
         */
        Now: StorageDescriptor<[], bigint, false, never>;
        /**
         * Whether the timestamp has been updated in this block.
         *
         * This value is updated to `true` upon successful submission of a timestamp by a node.
         * It is then checked at the end of each block execution in the `on_finalize` hook.
         */
        DidUpdate: StorageDescriptor<[], boolean, false, never>;
    };
    Aura: {
        /**
         * The current authority set.
         */
        Authorities: StorageDescriptor<[], Anonymize<Ic5m5lp1oioo8r>, false, never>;
        /**
         * The current slot of this block.
         *
         * This will be set in `on_initialize`.
         */
        CurrentSlot: StorageDescriptor<[], bigint, false, never>;
    };
    Grandpa: {
        /**
         * State of the current authority set.
         */
        State: StorageDescriptor<[], GrandpaStoredState, false, never>;
        /**
         * Pending change: (signaled at, scheduled change).
         */
        PendingChange: StorageDescriptor<[], Anonymize<I7pe2me3i3vtn9>, true, never>;
        /**
         * next block number where we can force a change.
         */
        NextForced: StorageDescriptor<[], number, true, never>;
        /**
         * `true` if we are currently stalled.
         */
        Stalled: StorageDescriptor<[], Anonymize<I9jd27rnpm8ttv>, true, never>;
        /**
         * The number of changes (both in terms of keys and underlying economic responsibilities)
         * in the "set" of Grandpa validators from genesis.
         */
        CurrentSetId: StorageDescriptor<[], bigint, false, never>;
        /**
         * A mapping from grandpa set ID to the index of the *most recent* session for which its
         * members were responsible.
         *
         * This is only used for validating equivocation proofs. An equivocation proof must
         * contains a key-ownership proof for a given session, therefore we need a way to tie
         * together sessions and GRANDPA set ids, i.e. we need to validate that a validator
         * was the owner of a given key on a given session, and what the active set ID was
         * during that session.
         *
         * TWOX-NOTE: `SetId` is not under user control.
         */
        SetIdSession: StorageDescriptor<[Key: bigint], number, true, never>;
        /**
         * The current list of authorities.
         */
        Authorities: StorageDescriptor<[], Anonymize<I3geksg000c171>, false, never>;
    };
    Balances: {
        /**
         * The total units issued in the system.
         */
        TotalIssuance: StorageDescriptor<[], bigint, false, never>;
        /**
         * The total units of outstanding deactivated balance in the system.
         */
        InactiveIssuance: StorageDescriptor<[], bigint, false, never>;
        /**
         * The Balances pallet example of storing the balance of an account.
         *
         * # Example
         *
         * ```nocompile
         *  impl pallet_balances::Config for Runtime {
         *    type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
         *  }
         * ```
         *
         * You can also store the balance of an account in the `System` pallet.
         *
         * # Example
         *
         * ```nocompile
         *  impl pallet_balances::Config for Runtime {
         *   type AccountStore = System
         *  }
         * ```
         *
         * But this comes with tradeoffs, storing account balances in the system pallet stores
         * `frame_system` data alongside the account data contrary to storing account balances in the
         * `Balances` pallet, which uses a `StorageMap` to store balances data only.
         * NOTE: This is only used in the case that this pallet is used to store balances.
         */
        Account: StorageDescriptor<[Key: SS58String], Anonymize<I1q8tnt1cluu5j>, false, never>;
        /**
         * Any liquidity locks on some account balances.
         * NOTE: Should only be accessed when setting, changing and freeing a lock.
         *
         * Use of locks is deprecated in favour of freezes. See `https://github.com/paritytech/substrate/pull/12951/`
         */
        Locks: StorageDescriptor<[Key: SS58String], Anonymize<I8ds64oj6581v0>, false, never>;
        /**
         * Named reserves on some account balances.
         *
         * Use of reserves is deprecated in favour of holds. See `https://github.com/paritytech/substrate/pull/12951/`
         */
        Reserves: StorageDescriptor<[Key: SS58String], Anonymize<Ia7pdug7cdsg8g>, false, never>;
        /**
         * Holds on account balances.
         */
        Holds: StorageDescriptor<[Key: SS58String], Anonymize<I9bin2jc70qt6q>, false, never>;
        /**
         * Freeze locks on account balances.
         */
        Freezes: StorageDescriptor<[Key: SS58String], Anonymize<I9bin2jc70qt6q>, false, never>;
    };
    TransactionPayment: {
        /**
        
         */
        NextFeeMultiplier: StorageDescriptor<[], bigint, false, never>;
        /**
        
         */
        StorageVersion: StorageDescriptor<[], TransactionPaymentReleases, false, never>;
    };
    Assets: {
        /**
         * Details of an asset.
         */
        Asset: StorageDescriptor<[Key: number], Anonymize<I3qklfjubrljqh>, true, never>;
        /**
         * The holdings of a specific account for a specific asset.
         */
        Account: StorageDescriptor<Anonymize<I7svnfko10tq2e>, Anonymize<Iag3f1hum3p4c8>, true, never>;
        /**
         * Approved balance transfers. First balance is the amount approved for transfer. Second
         * is the amount of `T::Currency` reserved for storing this.
         * First key is the asset ID, second key is the owner and third key is the delegate.
         */
        Approvals: StorageDescriptor<Anonymize<I2brm5b9jij1st>, Anonymize<I4s6jkha20aoh0>, true, never>;
        /**
         * Metadata of an asset.
         */
        Metadata: StorageDescriptor<[Key: number], Anonymize<I78s05f59eoi8b>, false, never>;
        /**
         * The asset ID enforced for the next asset creation, if any present. Otherwise, this storage
         * item has no effect.
         *
         * This can be useful for setting up constraints for IDs of the new assets. For example, by
         * providing an initial [`NextAssetId`] and using the [`crate::AutoIncAssetId`] callback, an
         * auto-increment model can be applied to all new asset IDs.
         *
         * The initial next asset ID can be set using the [`GenesisConfig`] or the
         * [SetNextAssetId](`migration::next_asset_id::SetNextAssetId`) migration.
         */
        NextAssetId: StorageDescriptor<[], number, true, never>;
    };
    Vesting: {
        /**
         * Vesting schedules of an account.
         *
         * VestingSchedules: map AccountId => Vec<VestingSchedule>
         */
        VestingSchedules: StorageDescriptor<[Key: SS58String], Anonymize<I199nnq793ql30>, false, never>;
    };
    Council: {
        /**
         * The hashes of the active proposals.
         */
        Proposals: StorageDescriptor<[], Anonymize<Ic5m5lp1oioo8r>, false, never>;
        /**
         * Actual proposal for a given hash, if it's current.
         */
        ProposalOf: StorageDescriptor<[Key: FixedSizeBinary<32>], Anonymize<Iaere0445mg91r>, true, never>;
        /**
         * Votes on a given proposal, if it is ongoing.
         */
        Voting: StorageDescriptor<[Key: FixedSizeBinary<32>], Anonymize<I99bb69usss9gs>, true, never>;
        /**
         * Proposals so far.
         */
        ProposalCount: StorageDescriptor<[], number, false, never>;
        /**
         * The current members of the collective. This is stored sorted (just by value).
         */
        Members: StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, false, never>;
        /**
         * The prime member that helps determine the default vote behavior in case of abstentions.
         */
        Prime: StorageDescriptor<[], SS58String, true, never>;
    };
    TechnicalCommittee: {
        /**
         * The hashes of the active proposals.
         */
        Proposals: StorageDescriptor<[], Anonymize<Ic5m5lp1oioo8r>, false, never>;
        /**
         * Actual proposal for a given hash, if it's current.
         */
        ProposalOf: StorageDescriptor<[Key: FixedSizeBinary<32>], Anonymize<Iaere0445mg91r>, true, never>;
        /**
         * Votes on a given proposal, if it is ongoing.
         */
        Voting: StorageDescriptor<[Key: FixedSizeBinary<32>], Anonymize<I99bb69usss9gs>, true, never>;
        /**
         * Proposals so far.
         */
        ProposalCount: StorageDescriptor<[], number, false, never>;
        /**
         * The current members of the collective. This is stored sorted (just by value).
         */
        Members: StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, false, never>;
        /**
         * The prime member that helps determine the default vote behavior in case of abstentions.
         */
        Prime: StorageDescriptor<[], SS58String, true, never>;
    };
    Treasury: {
        /**
         * Number of proposals that have been made.
         */
        ProposalCount: StorageDescriptor<[], number, false, never>;
        /**
         * Proposals that have been made.
         */
        Proposals: StorageDescriptor<[Key: number], Anonymize<Iegmj7n48sc3am>, true, never>;
        /**
         * The amount which has been reported as inactive to Currency.
         */
        Deactivated: StorageDescriptor<[], bigint, false, never>;
        /**
         * Proposal indices that have been approved but not yet awarded.
         */
        Approvals: StorageDescriptor<[], Anonymize<Icgljjb6j82uhn>, false, never>;
        /**
         * The count of spends that have been made.
         */
        SpendCount: StorageDescriptor<[], number, false, never>;
        /**
         * Spends that have been approved and being processed.
         */
        Spends: StorageDescriptor<[Key: number], Anonymize<Ie9j1itogtv7p5>, true, never>;
    };
    Democracy: {
        /**
         * The number of (public) proposals that have been made so far.
         */
        PublicPropCount: StorageDescriptor<[], number, false, never>;
        /**
         * The public proposals. Unsorted. The second item is the proposal.
         */
        PublicProps: StorageDescriptor<[], Anonymize<I6mhebgj62g585>, false, never>;
        /**
         * Those who have locked a deposit.
         *
         * TWOX-NOTE: Safe, as increasing integer keys are safe.
         */
        DepositOf: StorageDescriptor<[Key: number], Anonymize<I3vhcedhm4hpvm>, true, never>;
        /**
         * The next free referendum index, aka the number of referenda started so far.
         */
        ReferendumCount: StorageDescriptor<[], number, false, never>;
        /**
         * The lowest referendum index representing an unbaked referendum. Equal to
         * `ReferendumCount` if there isn't a unbaked referendum.
         */
        LowestUnbaked: StorageDescriptor<[], number, false, never>;
        /**
         * Information concerning any given referendum.
         *
         * TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
         */
        ReferendumInfoOf: StorageDescriptor<[Key: number], Anonymize<I526daka7j7b17>, true, never>;
        /**
         * All votes for a particular voter. We store the balance for the number of votes that we
         * have recorded. The second item is the total amount of delegations, that will be added.
         *
         * TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
         */
        VotingOf: StorageDescriptor<[Key: SS58String], Anonymize<Ifanv2kvm586s4>, false, never>;
        /**
         * True if the last referendum tabled was submitted externally. False if it was a public
         * proposal.
         */
        LastTabledWasExternal: StorageDescriptor<[], boolean, false, never>;
        /**
         * The referendum to be tabled whenever it would be valid to table an external proposal.
         * This happens when a referendum needs to be tabled and one of two conditions are met:
         * - `LastTabledWasExternal` is `false`; or
         * - `PublicProps` is empty.
         */
        NextExternal: StorageDescriptor<[], Anonymize<I5rsgtofmn5lli>, true, never>;
        /**
         * A record of who vetoed what. Maps proposal hash to a possible existent block number
         * (until when it may not be resubmitted) and who vetoed it.
         */
        Blacklist: StorageDescriptor<[Key: FixedSizeBinary<32>], Anonymize<Idned7t7knml6b>, true, never>;
        /**
         * Record of all proposals that have been subject to emergency cancellation.
         */
        Cancellations: StorageDescriptor<[Key: FixedSizeBinary<32>], boolean, false, never>;
        /**
         * General information concerning any proposal or referendum.
         * The `Hash` refers to the preimage of the `Preimages` provider which can be a JSON
         * dump or IPFS hash of a JSON file.
         *
         * Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
         * large preimages.
         */
        MetadataOf: StorageDescriptor<[Key: Anonymize<I2itl2k1j2q8nf>], FixedSizeBinary<32>, true, never>;
    };
    Sudo: {
        /**
         * The `AccountId` of the sudo key.
         */
        Key: StorageDescriptor<[], SS58String, true, never>;
    };
    Scheduler: {
        /**
        
         */
        IncompleteSince: StorageDescriptor<[], number, true, never>;
        /**
         * Items to be executed, indexed by the block number that they should be executed on.
         */
        Agenda: StorageDescriptor<[Key: number], Anonymize<I9i2qnsi9tt4st>, false, never>;
        /**
         * Retry configurations for items to be executed, indexed by task address.
         */
        Retries: StorageDescriptor<[Key: Anonymize<I9jd27rnpm8ttv>], Anonymize<I56u24ncejr5kt>, true, never>;
        /**
         * Lookup from a name to the block number and index of the task.
         *
         * For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
         * identities.
         */
        Lookup: StorageDescriptor<[Key: FixedSizeBinary<32>], Anonymize<I9jd27rnpm8ttv>, true, never>;
    };
    Identity: {
        /**
         * Information that is pertinent to identify the entity behind an account. First item is the
         * registration, second is the account's primary username.
         *
         * TWOX-NOTE: OK ― `AccountId` is a secure hash.
         */
        IdentityOf: StorageDescriptor<[Key: SS58String], Anonymize<I1evsr8hplu1lg>, true, never>;
        /**
         * The super-identity of an alternative "sub" identity together with its name, within that
         * context. If the account is not some other account's sub-identity, then just `None`.
         */
        SuperOf: StorageDescriptor<[Key: SS58String], Anonymize<I910puuahutflf>, true, never>;
        /**
         * Alternative "sub" identities of this account.
         *
         * The first item is the deposit, the second is a vector of the accounts.
         *
         * TWOX-NOTE: OK ― `AccountId` is a secure hash.
         */
        SubsOf: StorageDescriptor<[Key: SS58String], Anonymize<I4nfjdef0ibh44>, false, never>;
        /**
         * The set of registrars. Not expected to get very big as can only be added through a
         * special origin (likely a council motion).
         *
         * The index into this can be cast to `RegistrarIndex` to get a valid value.
         */
        Registrars: StorageDescriptor<[], Anonymize<I74af64m08r6as>, false, never>;
        /**
         * A map of the accounts who are authorized to grant usernames.
         */
        UsernameAuthorities: StorageDescriptor<[Key: SS58String], Anonymize<I9bhbof2vim227>, true, never>;
        /**
         * Reverse lookup from `username` to the `AccountId` that has registered it. The value should
         * be a key in the `IdentityOf` map, but it may not if the user has cleared their identity.
         *
         * Multiple usernames may map to the same `AccountId`, but `IdentityOf` will only map to one
         * primary username.
         */
        AccountOfUsername: StorageDescriptor<[Key: Binary], SS58String, true, never>;
        /**
         * Usernames that an authority has granted, but that the account controller has not confirmed
         * that they want it. Used primarily in cases where the `AccountId` cannot provide a signature
         * because they are a pure proxy, multisig, etc. In order to confirm it, they should call
         * [`Call::accept_username`].
         *
         * First tuple item is the account and second is the acceptance deadline.
         */
        PendingUsernames: StorageDescriptor<[Key: Binary], Anonymize<I6ouflveob4eli>, true, never>;
    };
    Proxy: {
        /**
         * The set of account proxies. Maps the account which has delegated to the accounts
         * which are being delegated to, together with the amount held on deposit.
         */
        Proxies: StorageDescriptor<[Key: SS58String], Anonymize<I775lbh1002e7f>, false, never>;
        /**
         * The announcements made by the proxy (key).
         */
        Announcements: StorageDescriptor<[Key: SS58String], Anonymize<I9p9lq3rej5bhc>, false, never>;
    };
    Multisig: {
        /**
         * The set of open multisig operations.
         */
        Multisigs: StorageDescriptor<Anonymize<I8uo3fpd3bcc6f>, Anonymize<Iag146hmjgqfgj>, true, never>;
    };
    Preimage: {
        /**
         * The request status of a given hash.
         */
        StatusFor: StorageDescriptor<[Key: FixedSizeBinary<32>], PreimageOldRequestStatus, true, never>;
        /**
         * The request status of a given hash.
         */
        RequestStatusFor: StorageDescriptor<[Key: FixedSizeBinary<32>], PreimageRequestStatus, true, never>;
        /**
        
         */
        PreimageFor: StorageDescriptor<[Key: Anonymize<I4pact7n2e9a0i>], Binary, true, never>;
    };
    Migrations: {
        /**
         * The currently active migration to run and its cursor.
         *
         * `None` indicates that no migration is running.
         */
        Cursor: StorageDescriptor<[], Anonymize<Iepbsvlk3qceij>, true, never>;
        /**
         * Set of all successfully executed migrations.
         *
         * This is used as blacklist, to not re-execute migrations that have not been removed from the
         * codebase yet. Governance can regularly clear this out via `clear_historic`.
         */
        Historic: StorageDescriptor<[Key: Binary], undefined, true, never>;
    };
    HeroJamAffiliates: {
        /**
         * Stores the affiliated accounts from the perspectives of the affiliatee
         */
        Affiliatees: StorageDescriptor<[Key: SS58String], Anonymize<Ia2lhg7l2hilo3>, true, never>;
        /**
         * Store affiliators aka accounts that have affilatees and earn rewards from them.
         * Such accounts can't be affiliatees anymore.
         */
        Affiliators: StorageDescriptor<[Key: SS58String], Anonymize<I5r70ks82kp6jd>, false, never>;
        /**
         * Stores the affiliate logic rules
         */
        AffiliateRules: StorageDescriptor<[Key: Anonymize<I8a3fkp2jhb3he>], Binary, true, never>;
        /**
        
         */
        NextAffiliateId: StorageDescriptor<[], number, false, never>;
        /**
        
         */
        AffiliateIdMapping: StorageDescriptor<[Key: number], SS58String, true, never>;
    };
    HeroJamTournament: {
        /**
        
         */
        TournamentSchedules: StorageDescriptor<[Key: number], Anonymize<I7m7jfq6avgoub>, true, never>;
        /**
        
         */
        TreasuryAccountsCache: StorageDescriptor<[Key: number], SS58String, true, never>;
        /**
        
         */
        NextTournamentIds: StorageDescriptor<[Key: number], number, false, never>;
        /**
        
         */
        Tournaments: StorageDescriptor<Anonymize<I5g2vv0ckl2m8b>, Anonymize<I1sm563u0c9vca>, true, never>;
        /**
        
         */
        ActiveTournaments: StorageDescriptor<[Key: number], Anonymize<If5qosgf4kc0ce>, false, never>;
        /**
        
         */
        TournamentRankings: StorageDescriptor<Anonymize<I5g2vv0ckl2m8b>, Anonymize<Iffrb8plvofj1a>, false, never>;
        /**
        
         */
        TournamentRewardClaims: StorageDescriptor<Anonymize<Icj2nb69liuu24>, Anonymize<I6f3f327e3k6hl>, true, never>;
        /**
        
         */
        GoldenDucks: StorageDescriptor<Anonymize<I5g2vv0ckl2m8b>, Anonymize<I4m5utiuhsse9r>, false, never>;
        /**
        
         */
        GoldenDuckRewardClaims: StorageDescriptor<Anonymize<I5g2vv0ckl2m8b>, Anonymize<I6f3f327e3k6hl>, true, never>;
    };
    HeroJamSeasons: {
        /**
        
         */
        CurrentSeasonStatus: StorageDescriptor<[], Anonymize<Ic1suif0iej5as>, true, never>;
        /**
         * Latest SeasonId created through 'update_season'
         */
        LatestSeason: StorageDescriptor<[], number, true, never>;
        /**
        
         */
        FinishedSeasons: StorageDescriptor<[Key: number], undefined, false, never>;
        /**
         * Use to represent a linked list of SeasonId. All entries will have a
         * value indicating the next season id to them except the latest season added
         * which will not have a value for it.
         */
        NextSeasonChain: StorageDescriptor<[Key: number], number, true, never>;
        /**
         * Use to represent a linked list of SeasonId. All entries will have a
         * value indicating the previous season id to them except the firsts season added
         * which will not have a value for it.
         */
        PrevSeasonChain: StorageDescriptor<[Key: number], number, true, never>;
        /**
         * Storage for the seasons.
         */
        Seasons: StorageDescriptor<[Key: number], Anonymize<Ialfslsm83ief>, true, never>;
        /**
         * Storage for the season's metadata.
         */
        SeasonMetadatas: StorageDescriptor<[Key: number], Anonymize<Idqvgv9ec5j9ok>, true, never>;
        /**
         * Storage for the season's schedules.
         */
        SeasonSchedules: StorageDescriptor<[Key: number], Anonymize<I11o1lb9439n82>, true, never>;
        /**
        
         */
        SeasonScheduledActions: StorageDescriptor<[Key: number], Anonymize<I3jqtuu2q04qhu>, true, never>;
        /**
         * Stores the assets season id registration.
         */
        AssetSeasonRegister: StorageDescriptor<[Key: number], number, true, never>;
    };
    HeroJamSage: {
        /**
         * Organizer of the game. Essentially the administrator with certain privileges.
         */
        Organizer: StorageDescriptor<[], SS58String, true, never>;
        /**
         * Tracks global configuration values that can be changed by the organizer only.
         */
        GeneralConfigStore: StorageDescriptor<[], Anonymize<I7ni4sa58l6l0v>, false, never>;
        /**
         * Some features need to be unlocked fulfilling certain criteria.
         *
         * This storage keeps track of the `UnlockRule` that needs to be satisfied to unlock the
         * feature. If there is no unlock rule, the feature can't be unlocked in that season.
         */
        SeasonUnlocks: StorageDescriptor<Anonymize<I3rer8a0o0uf4s>, FixedSizeBinary<5>, true, never>;
        /**
         * Tracks player configs per season. This can be mutated by unlocking certain privileges, e.g.
         * upgrading the storage inventory size.
         */
        PlayerSeasonConfigs: StorageDescriptor<Anonymize<I6ouflveob4eli>, Anonymize<I9da88a5i664uj>, false, never>;
        /**
         * Tracks player stats per season.
         */
        PlayerSeasonStats: StorageDescriptor<Anonymize<I6ouflveob4eli>, Anonymize<I3ur7d7so87s5l>, false, never>;
        /**
         * Maps the `AssetId` to its owner and the asset.
         */
        Assets: StorageDescriptor<[Key: number], Anonymize<Iotnkqlev5olf>, true, never>;
        /**
         * Keeps track of the assets owned by an account and in which season the asset was created.
         *
         * We mostly do ownership checks on this in the runtime. Whereas the frontends want to display
         * a list. This has to be queried with a `state.getKeysPaged` followed by a `state.getStorage`
         * call. Maybe it makes sense to implement a runtime api call for this to reduce networking
         * bandwidth.
         */
        AssetOwners: StorageDescriptor<Anonymize<Id32h28hjj1tch>, undefined, false, never>;
        /**
         * Keeps track of how many assets an account owns.
         */
        AssetsOwnedCount: StorageDescriptor<Anonymize<I6ouflveob4eli>, number, false, never>;
        /**
         * A filter that assets need to pass in order to be traded.
         *
         * The filter can be changed by the organizer.
         */
        SeasonTradeFilters: StorageDescriptor<[Key: number], Anonymize<I7vid11d51cf9q>, true, never>;
        /**
         * A filter that assets need to pass in order to be transfer.
         *
         * The filter can be changed by the organizer.
         */
        SeasonTransferFilters: StorageDescriptor<[Key: number], Anonymize<I7vid11d51cf9q>, true, never>;
        /**
         * Tracks assets that have been put on the market with a certain price.
         */
        AssetTradePrices: StorageDescriptor<Anonymize<I5g2vv0ckl2m8b>, bigint, true, never>;
        /**
         * Tracks assets that have been locked either through the `lock_asset` extrinsic, or by
         * other pallets via this pallet's `AssetManager` implementation.
         *
         * A locked asset can't be transferred, traded, consumed or mutated.
         */
        LockedAssets: StorageDescriptor<[Key: number], Anonymize<Id21bivdb9t470>, true, never>;
    };
};
type ICalls = {
    System: {
        /**
         *Make some on-chain remark.
         *
         *Can be executed by every `origin`.
         */
        remark: TxDescriptor<Anonymize<I8ofcg5rbj0g2c>>;
        /**
         *Set the number of pages in the WebAssembly environment's heap.
         */
        set_heap_pages: TxDescriptor<Anonymize<I4adgbll7gku4i>>;
        /**
         *Set the new runtime code.
         */
        set_code: TxDescriptor<Anonymize<I6pjjpfvhvcfru>>;
        /**
         *Set the new runtime code without doing any checks of the given `code`.
         *
         *Note that runtime upgrades will not run if this is called with a not-increasing spec
         *version!
         */
        set_code_without_checks: TxDescriptor<Anonymize<I6pjjpfvhvcfru>>;
        /**
         *Set some items of storage.
         */
        set_storage: TxDescriptor<Anonymize<I9pj91mj79qekl>>;
        /**
         *Kill some items from storage.
         */
        kill_storage: TxDescriptor<Anonymize<I39uah9nss64h9>>;
        /**
         *Kill all storage items with a key that starts with the given prefix.
         *
         ***NOTE:** We rely on the Root origin to provide us the number of subkeys under
         *the prefix we are removing to accurately calculate the weight of this function.
         */
        kill_prefix: TxDescriptor<Anonymize<Ik64dknsq7k08>>;
        /**
         *Make some on-chain remark and emit event.
         */
        remark_with_event: TxDescriptor<Anonymize<I8ofcg5rbj0g2c>>;
        /**
         *Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
         *later.
         *
         *This call requires Root origin.
         */
        authorize_upgrade: TxDescriptor<Anonymize<Ib51vk42m1po4n>>;
        /**
         *Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
         *later.
         *
         *WARNING: This authorizes an upgrade that will take place without any safety checks, for
         *example that the spec name remains the same and that the version number increases. Not
         *recommended for normal use. Use `authorize_upgrade` instead.
         *
         *This call requires Root origin.
         */
        authorize_upgrade_without_checks: TxDescriptor<Anonymize<Ib51vk42m1po4n>>;
        /**
         *Provide the preimage (runtime binary) `code` for an upgrade that has been authorized.
         *
         *If the authorization required a version check, this call will ensure the spec name
         *remains unchanged and that the spec version has increased.
         *
         *Depending on the runtime's `OnSetCode` configuration, this function may directly apply
         *the new `code` in the same block or attempt to schedule the upgrade.
         *
         *All origins are allowed.
         */
        apply_authorized_upgrade: TxDescriptor<Anonymize<I6pjjpfvhvcfru>>;
    };
    Timestamp: {
        /**
         *Set the current time.
         *
         *This call should be invoked exactly once per block. It will panic at the finalization
         *phase, if this call hasn't been invoked by that time.
         *
         *The timestamp should be greater than the previous one by the amount specified by
         *[`Config::MinimumPeriod`].
         *
         *The dispatch origin for this call must be _None_.
         *
         *This dispatch class is _Mandatory_ to ensure it gets executed in the block. Be aware
         *that changing the complexity of this call could result exhausting the resources in a
         *block to execute any other calls.
         *
         *## Complexity
         *- `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
         *- 1 storage read and 1 storage mutation (codec `O(1)` because of `DidUpdate::take` in
         *  `on_finalize`)
         *- 1 event handler `on_timestamp_set`. Must be `O(1)`.
         */
        set: TxDescriptor<Anonymize<Idcr6u6361oad9>>;
    };
    Grandpa: {
        /**
         *Report voter equivocation/misbehavior. This method will verify the
         *equivocation proof and validate the given key ownership proof
         *against the extracted offender. If both are valid, the offence
         *will be reported.
         */
        report_equivocation: TxDescriptor<Anonymize<I3a5kuu5t5jj3g>>;
        /**
         *Report voter equivocation/misbehavior. This method will verify the
         *equivocation proof and validate the given key ownership proof
         *against the extracted offender. If both are valid, the offence
         *will be reported.
         *
         *This extrinsic must be called unsigned and it is expected that only
         *block authors will call it (validated in `ValidateUnsigned`), as such
         *if the block author is defined it will be defined as the equivocation
         *reporter.
         */
        report_equivocation_unsigned: TxDescriptor<Anonymize<I3a5kuu5t5jj3g>>;
        /**
         *Note that the current authority set of the GRANDPA finality gadget has stalled.
         *
         *This will trigger a forced authority set change at the beginning of the next session, to
         *be enacted `delay` blocks after that. The `delay` should be high enough to safely assume
         *that the block signalling the forced change will not be re-orged e.g. 1000 blocks.
         *The block production rate (which may be slowed down because of finality lagging) should
         *be taken into account when choosing the `delay`. The GRANDPA voters based on the new
         *authority will start voting on top of `best_finalized_block_number` for new finalized
         *blocks. `best_finalized_block_number` should be the highest of the latest finalized
         *block of all validators of the new authority set.
         *
         *Only callable by root.
         */
        note_stalled: TxDescriptor<Anonymize<I2hviml3snvhhn>>;
    };
    Balances: {
        /**
         *Transfer some liquid free balance to another account.
         *
         *`transfer_allow_death` will set the `FreeBalance` of the sender and receiver.
         *If the sender's account is below the existential deposit as a result
         *of the transfer, the account will be reaped.
         *
         *The dispatch origin for this call must be `Signed` by the transactor.
         */
        transfer_allow_death: TxDescriptor<Anonymize<I4ktuaksf5i1gk>>;
        /**
         *Exactly as `transfer_allow_death`, except the origin must be root and the source account
         *may be specified.
         */
        force_transfer: TxDescriptor<Anonymize<I9bqtpv2ii35mp>>;
        /**
         *Same as the [`transfer_allow_death`] call, but with a check that the transfer will not
         *kill the origin account.
         *
         *99% of the time you want [`transfer_allow_death`] instead.
         *
         *[`transfer_allow_death`]: struct.Pallet.html#method.transfer
         */
        transfer_keep_alive: TxDescriptor<Anonymize<I4ktuaksf5i1gk>>;
        /**
         *Transfer the entire transferable balance from the caller account.
         *
         *NOTE: This function only attempts to transfer _transferable_ balances. This means that
         *any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
         *transferred by this function. To ensure that this function results in a killed account,
         *you might need to prepare the account by removing any reference counters, storage
         *deposits, etc...
         *
         *The dispatch origin of this call must be Signed.
         *
         *- `dest`: The recipient of the transfer.
         *- `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
         *  of the funds the account has, causing the sender account to be killed (false), or
         *  transfer everything except at least the existential deposit, which will guarantee to
         *  keep the sender account alive (true).
         */
        transfer_all: TxDescriptor<Anonymize<I9j7pagd6d4bda>>;
        /**
         *Unreserve some balance from a user by force.
         *
         *Can only be called by ROOT.
         */
        force_unreserve: TxDescriptor<Anonymize<I2h9pmio37r7fb>>;
        /**
         *Upgrade a specified account.
         *
         *- `origin`: Must be `Signed`.
         *- `who`: The account to be upgraded.
         *
         *This will waive the transaction fee if at least all but 10% of the accounts needed to
         *be upgraded. (We let some not have to be upgraded just in order to allow for the
         *possibility of churn).
         */
        upgrade_accounts: TxDescriptor<Anonymize<Ibmr18suc9ikh9>>;
        /**
         *Set the regular balance of a given account.
         *
         *The dispatch origin for this call is `root`.
         */
        force_set_balance: TxDescriptor<Anonymize<I9iq22t0burs89>>;
        /**
         *Adjust the total issuance in a saturating way.
         *
         *Can only be called by root and always needs a positive `delta`.
         *
         *# Example
         */
        force_adjust_total_issuance: TxDescriptor<Anonymize<I5u8olqbbvfnvf>>;
        /**
         *Burn the specified liquid free balance from the origin account.
         *
         *If the origin's account ends up below the existential deposit as a result
         *of the burn and `keep_alive` is false, the account will be reaped.
         *
         *Unlike sending funds to a _burn_ address, which merely makes the funds inaccessible,
         *this `burn` operation will reduce total issuance by the amount _burned_.
         */
        burn: TxDescriptor<Anonymize<I5utcetro501ir>>;
    };
    Assets: {
        /**
         *Issue a new class of fungible assets from a public origin.
         *
         *This new asset class has no assets initially and its owner is the origin.
         *
         *The origin must conform to the configured `CreateOrigin` and have sufficient funds free.
         *
         *Funds of sender are reserved by `AssetDeposit`.
         *
         *Parameters:
         *- `id`: The identifier of the new asset. This must not be currently in use to identify
         *an existing asset. If [`NextAssetId`] is set, then this must be equal to it.
         *- `admin`: The admin of this class of assets. The admin is the initial address of each
         *member of the asset class's admin team.
         *- `min_balance`: The minimum balance of this new asset that any single account must
         *have. If an account's balance is reduced below this, then it collapses to zero.
         *
         *Emits `Created` event when successful.
         *
         *Weight: `O(1)`
         */
        create: TxDescriptor<Anonymize<Ic357tcepuvo5c>>;
        /**
         *Issue a new class of fungible assets from a privileged origin.
         *
         *This new asset class has no assets initially.
         *
         *The origin must conform to `ForceOrigin`.
         *
         *Unlike `create`, no funds are reserved.
         *
         *- `id`: The identifier of the new asset. This must not be currently in use to identify
         *an existing asset. If [`NextAssetId`] is set, then this must be equal to it.
         *- `owner`: The owner of this class of assets. The owner has full superuser permissions
         *over this asset, but may later change and configure the permissions using
         *`transfer_ownership` and `set_team`.
         *- `min_balance`: The minimum balance of this new asset that any single account must
         *have. If an account's balance is reduced below this, then it collapses to zero.
         *
         *Emits `ForceCreated` event when successful.
         *
         *Weight: `O(1)`
         */
        force_create: TxDescriptor<Anonymize<I2rnoam876ruhj>>;
        /**
         *Start the process of destroying a fungible asset class.
         *
         *`start_destroy` is the first in a series of extrinsics that should be called, to allow
         *destruction of an asset class.
         *
         *The origin must conform to `ForceOrigin` or must be `Signed` by the asset's `owner`.
         *
         *- `id`: The identifier of the asset to be destroyed. This must identify an existing
         *  asset.
         */
        start_destroy: TxDescriptor<Anonymize<Ic5b47dj4coa3r>>;
        /**
         *Destroy all accounts associated with a given asset.
         *
         *`destroy_accounts` should only be called after `start_destroy` has been called, and the
         *asset is in a `Destroying` state.
         *
         *Due to weight restrictions, this function may need to be called multiple times to fully
         *destroy all accounts. It will destroy `RemoveItemsLimit` accounts at a time.
         *
         *- `id`: The identifier of the asset to be destroyed. This must identify an existing
         *  asset.
         *
         *Each call emits the `Event::DestroyedAccounts` event.
         */
        destroy_accounts: TxDescriptor<Anonymize<Ic5b47dj4coa3r>>;
        /**
         *Destroy all approvals associated with a given asset up to the max (T::RemoveItemsLimit).
         *
         *`destroy_approvals` should only be called after `start_destroy` has been called, and the
         *asset is in a `Destroying` state.
         *
         *Due to weight restrictions, this function may need to be called multiple times to fully
         *destroy all approvals. It will destroy `RemoveItemsLimit` approvals at a time.
         *
         *- `id`: The identifier of the asset to be destroyed. This must identify an existing
         *  asset.
         *
         *Each call emits the `Event::DestroyedApprovals` event.
         */
        destroy_approvals: TxDescriptor<Anonymize<Ic5b47dj4coa3r>>;
        /**
         *Complete destroying asset and unreserve currency.
         *
         *`finish_destroy` should only be called after `start_destroy` has been called, and the
         *asset is in a `Destroying` state. All accounts or approvals should be destroyed before
         *hand.
         *
         *- `id`: The identifier of the asset to be destroyed. This must identify an existing
         *  asset.
         *
         *Each successful call emits the `Event::Destroyed` event.
         */
        finish_destroy: TxDescriptor<Anonymize<Ic5b47dj4coa3r>>;
        /**
         *Mint assets of a particular class.
         *
         *The origin must be Signed and the sender must be the Issuer of the asset `id`.
         *
         *- `id`: The identifier of the asset to have some amount minted.
         *- `beneficiary`: The account to be credited with the minted assets.
         *- `amount`: The amount of the asset to be minted.
         *
         *Emits `Issued` event when successful.
         *
         *Weight: `O(1)`
         *Modes: Pre-existing balance of `beneficiary`; Account pre-existence of `beneficiary`.
         */
        mint: TxDescriptor<Anonymize<Ib3qnc19gu633c>>;
        /**
         *Reduce the balance of `who` by as much as possible up to `amount` assets of `id`.
         *
         *Origin must be Signed and the sender should be the Manager of the asset `id`.
         *
         *Bails with `NoAccount` if the `who` is already dead.
         *
         *- `id`: The identifier of the asset to have some amount burned.
         *- `who`: The account to be debited from.
         *- `amount`: The maximum amount by which `who`'s balance should be reduced.
         *
         *Emits `Burned` with the actual amount burned. If this takes the balance to below the
         *minimum for the asset, then the amount burned is increased to take it to zero.
         *
         *Weight: `O(1)`
         *Modes: Post-existence of `who`; Pre & post Zombie-status of `who`.
         */
        burn: TxDescriptor<Anonymize<Ifira6u9hi7cu1>>;
        /**
         *Move some assets from the sender account to another.
         *
         *Origin must be Signed.
         *
         *- `id`: The identifier of the asset to have some amount transferred.
         *- `target`: The account to be credited.
         *- `amount`: The amount by which the sender's balance of assets should be reduced and
         *`target`'s balance increased. The amount actually transferred may be slightly greater in
         *the case that the transfer would otherwise take the sender balance above zero but below
         *the minimum balance. Must be greater than zero.
         *
         *Emits `Transferred` with the actual amount transferred. If this takes the source balance
         *to below the minimum for the asset, then the amount transferred is increased to take it
         *to zero.
         *
         *Weight: `O(1)`
         *Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
         *`target`.
         */
        transfer: TxDescriptor<Anonymize<I72tqocvdoqfff>>;
        /**
         *Move some assets from the sender account to another, keeping the sender account alive.
         *
         *Origin must be Signed.
         *
         *- `id`: The identifier of the asset to have some amount transferred.
         *- `target`: The account to be credited.
         *- `amount`: The amount by which the sender's balance of assets should be reduced and
         *`target`'s balance increased. The amount actually transferred may be slightly greater in
         *the case that the transfer would otherwise take the sender balance above zero but below
         *the minimum balance. Must be greater than zero.
         *
         *Emits `Transferred` with the actual amount transferred. If this takes the source balance
         *to below the minimum for the asset, then the amount transferred is increased to take it
         *to zero.
         *
         *Weight: `O(1)`
         *Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
         *`target`.
         */
        transfer_keep_alive: TxDescriptor<Anonymize<I72tqocvdoqfff>>;
        /**
         *Move some assets from one account to another.
         *
         *Origin must be Signed and the sender should be the Admin of the asset `id`.
         *
         *- `id`: The identifier of the asset to have some amount transferred.
         *- `source`: The account to be debited.
         *- `dest`: The account to be credited.
         *- `amount`: The amount by which the `source`'s balance of assets should be reduced and
         *`dest`'s balance increased. The amount actually transferred may be slightly greater in
         *the case that the transfer would otherwise take the `source` balance above zero but
         *below the minimum balance. Must be greater than zero.
         *
         *Emits `Transferred` with the actual amount transferred. If this takes the source balance
         *to below the minimum for the asset, then the amount transferred is increased to take it
         *to zero.
         *
         *Weight: `O(1)`
         *Modes: Pre-existence of `dest`; Post-existence of `source`; Account pre-existence of
         *`dest`.
         */
        force_transfer: TxDescriptor<Anonymize<I2i27f3sfmvc05>>;
        /**
         *Disallow further unprivileged transfers of an asset `id` from an account `who`. `who`
         *must already exist as an entry in `Account`s of the asset. If you want to freeze an
         *account that does not have an entry, use `touch_other` first.
         *
         *Origin must be Signed and the sender should be the Freezer of the asset `id`.
         *
         *- `id`: The identifier of the asset to be frozen.
         *- `who`: The account to be frozen.
         *
         *Emits `Frozen`.
         *
         *Weight: `O(1)`
         */
        freeze: TxDescriptor<Anonymize<I1nlrtd1epki2d>>;
        /**
         *Allow unprivileged transfers to and from an account again.
         *
         *Origin must be Signed and the sender should be the Admin of the asset `id`.
         *
         *- `id`: The identifier of the asset to be frozen.
         *- `who`: The account to be unfrozen.
         *
         *Emits `Thawed`.
         *
         *Weight: `O(1)`
         */
        thaw: TxDescriptor<Anonymize<I1nlrtd1epki2d>>;
        /**
         *Disallow further unprivileged transfers for the asset class.
         *
         *Origin must be Signed and the sender should be the Freezer of the asset `id`.
         *
         *- `id`: The identifier of the asset to be frozen.
         *
         *Emits `Frozen`.
         *
         *Weight: `O(1)`
         */
        freeze_asset: TxDescriptor<Anonymize<Ic5b47dj4coa3r>>;
        /**
         *Allow unprivileged transfers for the asset again.
         *
         *Origin must be Signed and the sender should be the Admin of the asset `id`.
         *
         *- `id`: The identifier of the asset to be thawed.
         *
         *Emits `Thawed`.
         *
         *Weight: `O(1)`
         */
        thaw_asset: TxDescriptor<Anonymize<Ic5b47dj4coa3r>>;
        /**
         *Change the Owner of an asset.
         *
         *Origin must be Signed and the sender should be the Owner of the asset `id`.
         *
         *- `id`: The identifier of the asset.
         *- `owner`: The new Owner of this asset.
         *
         *Emits `OwnerChanged`.
         *
         *Weight: `O(1)`
         */
        transfer_ownership: TxDescriptor<Anonymize<I3abtumcmempjs>>;
        /**
         *Change the Issuer, Admin and Freezer of an asset.
         *
         *Origin must be Signed and the sender should be the Owner of the asset `id`.
         *
         *- `id`: The identifier of the asset to be frozen.
         *- `issuer`: The new Issuer of this asset.
         *- `admin`: The new Admin of this asset.
         *- `freezer`: The new Freezer of this asset.
         *
         *Emits `TeamChanged`.
         *
         *Weight: `O(1)`
         */
        set_team: TxDescriptor<Anonymize<Id81m8flopt8ha>>;
        /**
         *Set the metadata for an asset.
         *
         *Origin must be Signed and the sender should be the Owner of the asset `id`.
         *
         *Funds of sender are reserved according to the formula:
         *`MetadataDepositBase + MetadataDepositPerByte * (name.len + symbol.len)` taking into
         *account any already reserved funds.
         *
         *- `id`: The identifier of the asset to update.
         *- `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
         *- `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
         *- `decimals`: The number of decimals this asset uses to represent one unit.
         *
         *Emits `MetadataSet`.
         *
         *Weight: `O(1)`
         */
        set_metadata: TxDescriptor<Anonymize<I8hff7chabggkd>>;
        /**
         *Clear the metadata for an asset.
         *
         *Origin must be Signed and the sender should be the Owner of the asset `id`.
         *
         *Any deposit is freed for the asset owner.
         *
         *- `id`: The identifier of the asset to clear.
         *
         *Emits `MetadataCleared`.
         *
         *Weight: `O(1)`
         */
        clear_metadata: TxDescriptor<Anonymize<Ic5b47dj4coa3r>>;
        /**
         *Force the metadata for an asset to some value.
         *
         *Origin must be ForceOrigin.
         *
         *Any deposit is left alone.
         *
         *- `id`: The identifier of the asset to update.
         *- `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
         *- `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
         *- `decimals`: The number of decimals this asset uses to represent one unit.
         *
         *Emits `MetadataSet`.
         *
         *Weight: `O(N + S)` where N and S are the length of the name and symbol respectively.
         */
        force_set_metadata: TxDescriptor<Anonymize<I49i39mtj1ivbs>>;
        /**
         *Clear the metadata for an asset.
         *
         *Origin must be ForceOrigin.
         *
         *Any deposit is returned.
         *
         *- `id`: The identifier of the asset to clear.
         *
         *Emits `MetadataCleared`.
         *
         *Weight: `O(1)`
         */
        force_clear_metadata: TxDescriptor<Anonymize<Ic5b47dj4coa3r>>;
        /**
         *Alter the attributes of a given asset.
         *
         *Origin must be `ForceOrigin`.
         *
         *- `id`: The identifier of the asset.
         *- `owner`: The new Owner of this asset.
         *- `issuer`: The new Issuer of this asset.
         *- `admin`: The new Admin of this asset.
         *- `freezer`: The new Freezer of this asset.
         *- `min_balance`: The minimum balance of this new asset that any single account must
         *have. If an account's balance is reduced below this, then it collapses to zero.
         *- `is_sufficient`: Whether a non-zero balance of this asset is deposit of sufficient
         *value to account for the state bloat associated with its balance storage. If set to
         *`true`, then non-zero balances may be stored without a `consumer` reference (and thus
         *an ED in the Balances pallet or whatever else is used to control user-account state
         *growth).
         *- `is_frozen`: Whether this asset class is frozen except for permissioned/admin
         *instructions.
         *
         *Emits `AssetStatusChanged` with the identity of the asset.
         *
         *Weight: `O(1)`
         */
        force_asset_status: TxDescriptor<Anonymize<Ifkr2kcak2vto1>>;
        /**
         *Approve an amount of asset for transfer by a delegated third-party account.
         *
         *Origin must be Signed.
         *
         *Ensures that `ApprovalDeposit` worth of `Currency` is reserved from signing account
         *for the purpose of holding the approval. If some non-zero amount of assets is already
         *approved from signing account to `delegate`, then it is topped up or unreserved to
         *meet the right value.
         *
         *NOTE: The signing account does not need to own `amount` of assets at the point of
         *making this call.
         *
         *- `id`: The identifier of the asset.
         *- `delegate`: The account to delegate permission to transfer asset.
         *- `amount`: The amount of asset that may be transferred by `delegate`. If there is
         *already an approval in place, then this acts additively.
         *
         *Emits `ApprovedTransfer` on success.
         *
         *Weight: `O(1)`
         */
        approve_transfer: TxDescriptor<Anonymize<I1ju6r8q0cs9jt>>;
        /**
         *Cancel all of some asset approved for delegated transfer by a third-party account.
         *
         *Origin must be Signed and there must be an approval in place between signer and
         *`delegate`.
         *
         *Unreserves any deposit previously reserved by `approve_transfer` for the approval.
         *
         *- `id`: The identifier of the asset.
         *- `delegate`: The account delegated permission to transfer asset.
         *
         *Emits `ApprovalCancelled` on success.
         *
         *Weight: `O(1)`
         */
        cancel_approval: TxDescriptor<Anonymize<I4kpeq6j7cd5bu>>;
        /**
         *Cancel all of some asset approved for delegated transfer by a third-party account.
         *
         *Origin must be either ForceOrigin or Signed origin with the signer being the Admin
         *account of the asset `id`.
         *
         *Unreserves any deposit previously reserved by `approve_transfer` for the approval.
         *
         *- `id`: The identifier of the asset.
         *- `delegate`: The account delegated permission to transfer asset.
         *
         *Emits `ApprovalCancelled` on success.
         *
         *Weight: `O(1)`
         */
        force_cancel_approval: TxDescriptor<Anonymize<I5na1ka76k6811>>;
        /**
         *Transfer some asset balance from a previously delegated account to some third-party
         *account.
         *
         *Origin must be Signed and there must be an approval in place by the `owner` to the
         *signer.
         *
         *If the entire amount approved for transfer is transferred, then any deposit previously
         *reserved by `approve_transfer` is unreserved.
         *
         *- `id`: The identifier of the asset.
         *- `owner`: The account which previously approved for a transfer of at least `amount` and
         *from which the asset balance will be withdrawn.
         *- `destination`: The account to which the asset balance of `amount` will be transferred.
         *- `amount`: The amount of assets to transfer.
         *
         *Emits `TransferredApproved` on success.
         *
         *Weight: `O(1)`
         */
        transfer_approved: TxDescriptor<Anonymize<I59mhdb9omdqfa>>;
        /**
         *Create an asset account for non-provider assets.
         *
         *A deposit will be taken from the signer account.
         *
         *- `origin`: Must be Signed; the signer account must have sufficient funds for a deposit
         *  to be taken.
         *- `id`: The identifier of the asset for the account to be created.
         *
         *Emits `Touched` event when successful.
         */
        touch: TxDescriptor<Anonymize<Ic5b47dj4coa3r>>;
        /**
         *Return the deposit (if any) of an asset account or a consumer reference (if any) of an
         *account.
         *
         *The origin must be Signed.
         *
         *- `id`: The identifier of the asset for which the caller would like the deposit
         *  refunded.
         *- `allow_burn`: If `true` then assets may be destroyed in order to complete the refund.
         *
         *Emits `Refunded` event when successful.
         */
        refund: TxDescriptor<Anonymize<I9vl5kpk0fpakt>>;
        /**
         *Sets the minimum balance of an asset.
         *
         *Only works if there aren't any accounts that are holding the asset or if
         *the new value of `min_balance` is less than the old one.
         *
         *Origin must be Signed and the sender has to be the Owner of the
         *asset `id`.
         *
         *- `id`: The identifier of the asset.
         *- `min_balance`: The new value of `min_balance`.
         *
         *Emits `AssetMinBalanceChanged` event when successful.
         */
        set_min_balance: TxDescriptor<Anonymize<I717jt61hu19b4>>;
        /**
         *Create an asset account for `who`.
         *
         *A deposit will be taken from the signer account.
         *
         *- `origin`: Must be Signed by `Freezer` or `Admin` of the asset `id`; the signer account
         *  must have sufficient funds for a deposit to be taken.
         *- `id`: The identifier of the asset for the account to be created.
         *- `who`: The account to be created.
         *
         *Emits `Touched` event when successful.
         */
        touch_other: TxDescriptor<Anonymize<I1nlrtd1epki2d>>;
        /**
         *Return the deposit (if any) of a target asset account. Useful if you are the depositor.
         *
         *The origin must be Signed and either the account owner, depositor, or asset `Admin`. In
         *order to burn a non-zero balance of the asset, the caller must be the account and should
         *use `refund`.
         *
         *- `id`: The identifier of the asset for the account holding a deposit.
         *- `who`: The account to refund.
         *
         *Emits `Refunded` event when successful.
         */
        refund_other: TxDescriptor<Anonymize<I1nlrtd1epki2d>>;
        /**
         *Disallow further unprivileged transfers of an asset `id` to and from an account `who`.
         *
         *Origin must be Signed and the sender should be the Freezer of the asset `id`.
         *
         *- `id`: The identifier of the account's asset.
         *- `who`: The account to be unblocked.
         *
         *Emits `Blocked`.
         *
         *Weight: `O(1)`
         */
        block: TxDescriptor<Anonymize<I1nlrtd1epki2d>>;
        /**
         *Transfer the entire transferable balance from the caller asset account.
         *
         *NOTE: This function only attempts to transfer _transferable_ balances. This means that
         *any held, frozen, or minimum balance (when `keep_alive` is `true`), will not be
         *transferred by this function. To ensure that this function results in a killed account,
         *you might need to prepare the account by removing any reference counters, storage
         *deposits, etc...
         *
         *The dispatch origin of this call must be Signed.
         *
         *- `id`: The identifier of the asset for the account holding a deposit.
         *- `dest`: The recipient of the transfer.
         *- `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
         *  of the funds the asset account has, causing the sender asset account to be killed
         *  (false), or transfer everything except at least the minimum balance, which will
         *  guarantee to keep the sender asset account alive (true).
         */
        transfer_all: TxDescriptor<Anonymize<I7f7v8192r1lmq>>;
    };
    Vesting: {
        /**
        
         */
        claim: TxDescriptor<undefined>;
        /**
        
         */
        vested_transfer: TxDescriptor<Anonymize<I14u52veq53dmr>>;
        /**
        
         */
        update_vesting_schedules: TxDescriptor<Anonymize<I8ajr5e1kfvl54>>;
        /**
        
         */
        claim_for: TxDescriptor<Anonymize<Id4pbsr0s25b4d>>;
    };
    Council: {
        /**
         *Set the collective's membership.
         *
         *- `new_members`: The new member list. Be nice to the chain and provide it sorted.
         *- `prime`: The prime member whose vote sets the default.
         *- `old_count`: The upper bound for the previous number of members in storage. Used for
         *  weight estimation.
         *
         *The dispatch of this call must be `SetMembersOrigin`.
         *
         *NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
         *      the weight estimations rely on it to estimate dispatchable weight.
         *
         *# WARNING:
         *
         *The `pallet-collective` can also be managed by logic outside of the pallet through the
         *implementation of the trait [`ChangeMembers`].
         *Any call to `set_members` must be careful that the member set doesn't get out of sync
         *with other logic managing the member set.
         *
         *## Complexity:
         *- `O(MP + N)` where:
         *  - `M` old-members-count (code- and governance-bounded)
         *  - `N` new-members-count (code- and governance-bounded)
         *  - `P` proposals-count (code-bounded)
         */
        set_members: TxDescriptor<Anonymize<I38jfk5li8iang>>;
        /**
         *Dispatch a proposal from a member using the `Member` origin.
         *
         *Origin must be a member of the collective.
         *
         *## Complexity:
         *- `O(B + M + P)` where:
         *- `B` is `proposal` size in bytes (length-fee-bounded)
         *- `M` members-count (code-bounded)
         *- `P` complexity of dispatching `proposal`
         */
        execute: TxDescriptor<Anonymize<Iehvtsrbvgnid1>>;
        /**
         *Add a new proposal to either be voted on or executed directly.
         *
         *Requires the sender to be member.
         *
         *`threshold` determines whether `proposal` is executed directly (`threshold < 2`)
         *or put up for voting.
         *
         *## Complexity
         *- `O(B + M + P1)` or `O(B + M + P2)` where:
         *  - `B` is `proposal` size in bytes (length-fee-bounded)
         *  - `M` is members-count (code- and governance-bounded)
         *  - branching is influenced by `threshold` where:
         *    - `P1` is proposal execution complexity (`threshold < 2`)
         *    - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
         */
        propose: TxDescriptor<Anonymize<I6pldd8r2oqal4>>;
        /**
         *Add an aye or nay vote for the sender to the given proposal.
         *
         *Requires the sender to be a member.
         *
         *Transaction fees will be waived if the member is voting on any particular proposal
         *for the first time and the call is successful. Subsequent vote changes will charge a
         *fee.
         *## Complexity
         *- `O(M)` where `M` is members-count (code- and governance-bounded)
         */
        vote: TxDescriptor<Anonymize<I2dtrijkm5601t>>;
        /**
         *Disapprove a proposal, close, and remove it from the system, regardless of its current
         *state.
         *
         *Must be called by the Root origin.
         *
         *Parameters:
         ** `proposal_hash`: The hash of the proposal that should be disapproved.
         *
         *## Complexity
         *O(P) where P is the number of max proposals
         */
        disapprove_proposal: TxDescriptor<Anonymize<I2ev73t79f46tb>>;
        /**
         *Close a vote that is either approved, disapproved or whose voting period has ended.
         *
         *May be called by any signed account in order to finish voting and close the proposal.
         *
         *If called before the end of the voting period it will only close the vote if it is
         *has enough votes to be approved or disapproved.
         *
         *If called after the end of the voting period abstentions are counted as rejections
         *unless there is a prime member set and the prime member cast an approval.
         *
         *If the close operation completes successfully with disapproval, the transaction fee will
         *be waived. Otherwise execution of the approved operation will be charged to the caller.
         *
         *+ `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
         *proposal.
         *+ `length_bound`: The upper bound for the length of the proposal in storage. Checked via
         *`storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
         *
         *## Complexity
         *- `O(B + M + P1 + P2)` where:
         *  - `B` is `proposal` size in bytes (length-fee-bounded)
         *  - `M` is members-count (code- and governance-bounded)
         *  - `P1` is the complexity of `proposal` preimage.
         *  - `P2` is proposal-count (code-bounded)
         */
        close: TxDescriptor<Anonymize<Ib2obgji960euh>>;
    };
    TechnicalCommittee: {
        /**
         *Set the collective's membership.
         *
         *- `new_members`: The new member list. Be nice to the chain and provide it sorted.
         *- `prime`: The prime member whose vote sets the default.
         *- `old_count`: The upper bound for the previous number of members in storage. Used for
         *  weight estimation.
         *
         *The dispatch of this call must be `SetMembersOrigin`.
         *
         *NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
         *      the weight estimations rely on it to estimate dispatchable weight.
         *
         *# WARNING:
         *
         *The `pallet-collective` can also be managed by logic outside of the pallet through the
         *implementation of the trait [`ChangeMembers`].
         *Any call to `set_members` must be careful that the member set doesn't get out of sync
         *with other logic managing the member set.
         *
         *## Complexity:
         *- `O(MP + N)` where:
         *  - `M` old-members-count (code- and governance-bounded)
         *  - `N` new-members-count (code- and governance-bounded)
         *  - `P` proposals-count (code-bounded)
         */
        set_members: TxDescriptor<Anonymize<I38jfk5li8iang>>;
        /**
         *Dispatch a proposal from a member using the `Member` origin.
         *
         *Origin must be a member of the collective.
         *
         *## Complexity:
         *- `O(B + M + P)` where:
         *- `B` is `proposal` size in bytes (length-fee-bounded)
         *- `M` members-count (code-bounded)
         *- `P` complexity of dispatching `proposal`
         */
        execute: TxDescriptor<Anonymize<Iehvtsrbvgnid1>>;
        /**
         *Add a new proposal to either be voted on or executed directly.
         *
         *Requires the sender to be member.
         *
         *`threshold` determines whether `proposal` is executed directly (`threshold < 2`)
         *or put up for voting.
         *
         *## Complexity
         *- `O(B + M + P1)` or `O(B + M + P2)` where:
         *  - `B` is `proposal` size in bytes (length-fee-bounded)
         *  - `M` is members-count (code- and governance-bounded)
         *  - branching is influenced by `threshold` where:
         *    - `P1` is proposal execution complexity (`threshold < 2`)
         *    - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
         */
        propose: TxDescriptor<Anonymize<I6pldd8r2oqal4>>;
        /**
         *Add an aye or nay vote for the sender to the given proposal.
         *
         *Requires the sender to be a member.
         *
         *Transaction fees will be waived if the member is voting on any particular proposal
         *for the first time and the call is successful. Subsequent vote changes will charge a
         *fee.
         *## Complexity
         *- `O(M)` where `M` is members-count (code- and governance-bounded)
         */
        vote: TxDescriptor<Anonymize<I2dtrijkm5601t>>;
        /**
         *Disapprove a proposal, close, and remove it from the system, regardless of its current
         *state.
         *
         *Must be called by the Root origin.
         *
         *Parameters:
         ** `proposal_hash`: The hash of the proposal that should be disapproved.
         *
         *## Complexity
         *O(P) where P is the number of max proposals
         */
        disapprove_proposal: TxDescriptor<Anonymize<I2ev73t79f46tb>>;
        /**
         *Close a vote that is either approved, disapproved or whose voting period has ended.
         *
         *May be called by any signed account in order to finish voting and close the proposal.
         *
         *If called before the end of the voting period it will only close the vote if it is
         *has enough votes to be approved or disapproved.
         *
         *If called after the end of the voting period abstentions are counted as rejections
         *unless there is a prime member set and the prime member cast an approval.
         *
         *If the close operation completes successfully with disapproval, the transaction fee will
         *be waived. Otherwise execution of the approved operation will be charged to the caller.
         *
         *+ `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
         *proposal.
         *+ `length_bound`: The upper bound for the length of the proposal in storage. Checked via
         *`storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
         *
         *## Complexity
         *- `O(B + M + P1 + P2)` where:
         *  - `B` is `proposal` size in bytes (length-fee-bounded)
         *  - `M` is members-count (code- and governance-bounded)
         *  - `P1` is the complexity of `proposal` preimage.
         *  - `P2` is proposal-count (code-bounded)
         */
        close: TxDescriptor<Anonymize<Ib2obgji960euh>>;
    };
    Treasury: {
        /**
         *Propose and approve a spend of treasury funds.
         *
         *## Dispatch Origin
         *
         *Must be [`Config::SpendOrigin`] with the `Success` value being at least `amount`.
         *
         *### Details
         *NOTE: For record-keeping purposes, the proposer is deemed to be equivalent to the
         *beneficiary.
         *
         *### Parameters
         *- `amount`: The amount to be transferred from the treasury to the `beneficiary`.
         *- `beneficiary`: The destination account for the transfer.
         *
         *## Events
         *
         *Emits [`Event::SpendApproved`] if successful.
         */
        spend_local: TxDescriptor<Anonymize<Icnrv1mfbd3in1>>;
        /**
         *Force a previously approved proposal to be removed from the approval queue.
         *
         *## Dispatch Origin
         *
         *Must be [`Config::RejectOrigin`].
         *
         *## Details
         *
         *The original deposit will no longer be returned.
         *
         *### Parameters
         *- `proposal_id`: The index of a proposal
         *
         *### Complexity
         *- O(A) where `A` is the number of approvals
         *
         *### Errors
         *- [`Error::ProposalNotApproved`]: The `proposal_id` supplied was not found in the
         *  approval queue, i.e., the proposal has not been approved. This could also mean the
         *  proposal does not exist altogether, thus there is no way it would have been approved
         *  in the first place.
         */
        remove_approval: TxDescriptor<Anonymize<Icm9m0qeemu66d>>;
        /**
         *Propose and approve a spend of treasury funds.
         *
         *## Dispatch Origin
         *
         *Must be [`Config::SpendOrigin`] with the `Success` value being at least
         *`amount` of `asset_kind` in the native asset. The amount of `asset_kind` is converted
         *for assertion using the [`Config::BalanceConverter`].
         *
         *## Details
         *
         *Create an approved spend for transferring a specific `amount` of `asset_kind` to a
         *designated beneficiary. The spend must be claimed using the `payout` dispatchable within
         *the [`Config::PayoutPeriod`].
         *
         *### Parameters
         *- `asset_kind`: An indicator of the specific asset class to be spent.
         *- `amount`: The amount to be transferred from the treasury to the `beneficiary`.
         *- `beneficiary`: The beneficiary of the spend.
         *- `valid_from`: The block number from which the spend can be claimed. It can refer to
         *  the past if the resulting spend has not yet expired according to the
         *  [`Config::PayoutPeriod`]. If `None`, the spend can be claimed immediately after
         *  approval.
         *
         *## Events
         *
         *Emits [`Event::AssetSpendApproved`] if successful.
         */
        spend: TxDescriptor<Anonymize<I6qq5nnbjegi8u>>;
        /**
         *Claim a spend.
         *
         *## Dispatch Origin
         *
         *Must be signed
         *
         *## Details
         *
         *Spends must be claimed within some temporal bounds. A spend may be claimed within one
         *[`Config::PayoutPeriod`] from the `valid_from` block.
         *In case of a payout failure, the spend status must be updated with the `check_status`
         *dispatchable before retrying with the current function.
         *
         *### Parameters
         *- `index`: The spend index.
         *
         *## Events
         *
         *Emits [`Event::Paid`] if successful.
         */
        payout: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
         *Check the status of the spend and remove it from the storage if processed.
         *
         *## Dispatch Origin
         *
         *Must be signed.
         *
         *## Details
         *
         *The status check is a prerequisite for retrying a failed payout.
         *If a spend has either succeeded or expired, it is removed from the storage by this
         *function. In such instances, transaction fees are refunded.
         *
         *### Parameters
         *- `index`: The spend index.
         *
         *## Events
         *
         *Emits [`Event::PaymentFailed`] if the spend payout has failed.
         *Emits [`Event::SpendProcessed`] if the spend payout has succeed.
         */
        check_status: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
         *Void previously approved spend.
         *
         *## Dispatch Origin
         *
         *Must be [`Config::RejectOrigin`].
         *
         *## Details
         *
         *A spend void is only possible if the payout has not been attempted yet.
         *
         *### Parameters
         *- `index`: The spend index.
         *
         *## Events
         *
         *Emits [`Event::AssetSpendVoided`] if successful.
         */
        void_spend: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
    };
    Democracy: {
        /**
         *Propose a sensitive action to be taken.
         *
         *The dispatch origin of this call must be _Signed_ and the sender must
         *have funds to cover the deposit.
         *
         *- `proposal_hash`: The hash of the proposal preimage.
         *- `value`: The amount of deposit (must be at least `MinimumDeposit`).
         *
         *Emits `Proposed`.
         */
        propose: TxDescriptor<Anonymize<I1moso5oagpiea>>;
        /**
         *Signals agreement with a particular proposal.
         *
         *The dispatch origin of this call must be _Signed_ and the sender
         *must have funds to cover the deposit, equal to the original deposit.
         *
         *- `proposal`: The index of the proposal to second.
         */
        second: TxDescriptor<Anonymize<Ibeb4n9vpjefp3>>;
        /**
         *Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
         *otherwise it is a vote to keep the status quo.
         *
         *The dispatch origin of this call must be _Signed_.
         *
         *- `ref_index`: The index of the referendum to vote for.
         *- `vote`: The vote configuration.
         */
        vote: TxDescriptor<Anonymize<Id7murq9s9fg6h>>;
        /**
         *Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
         *referendum.
         *
         *The dispatch origin of this call must be `CancellationOrigin`.
         *
         *-`ref_index`: The index of the referendum to cancel.
         *
         *Weight: `O(1)`.
         */
        emergency_cancel: TxDescriptor<Anonymize<Ied9mja4bq7va8>>;
        /**
         *Schedule a referendum to be tabled once it is legal to schedule an external
         *referendum.
         *
         *The dispatch origin of this call must be `ExternalOrigin`.
         *
         *- `proposal_hash`: The preimage hash of the proposal.
         */
        external_propose: TxDescriptor<Anonymize<I4f7jul8ljs54r>>;
        /**
         *Schedule a majority-carries referendum to be tabled next once it is legal to schedule
         *an external referendum.
         *
         *The dispatch of this call must be `ExternalMajorityOrigin`.
         *
         *- `proposal_hash`: The preimage hash of the proposal.
         *
         *Unlike `external_propose`, blacklisting has no effect on this and it may replace a
         *pre-scheduled `external_propose` call.
         *
         *Weight: `O(1)`
         */
        external_propose_majority: TxDescriptor<Anonymize<I4f7jul8ljs54r>>;
        /**
         *Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
         *schedule an external referendum.
         *
         *The dispatch of this call must be `ExternalDefaultOrigin`.
         *
         *- `proposal_hash`: The preimage hash of the proposal.
         *
         *Unlike `external_propose`, blacklisting has no effect on this and it may replace a
         *pre-scheduled `external_propose` call.
         *
         *Weight: `O(1)`
         */
        external_propose_default: TxDescriptor<Anonymize<I4f7jul8ljs54r>>;
        /**
         *Schedule the currently externally-proposed majority-carries referendum to be tabled
         *immediately. If there is no externally-proposed referendum currently, or if there is one
         *but it is not a majority-carries referendum then it fails.
         *
         *The dispatch of this call must be `FastTrackOrigin`.
         *
         *- `proposal_hash`: The hash of the current external proposal.
         *- `voting_period`: The period that is allowed for voting on this proposal. Increased to
         *	Must be always greater than zero.
         *	For `FastTrackOrigin` must be equal or greater than `FastTrackVotingPeriod`.
         *- `delay`: The number of block after voting has ended in approval and this should be
         *  enacted. This doesn't have a minimum amount.
         *
         *Emits `Started`.
         *
         *Weight: `O(1)`
         */
        fast_track: TxDescriptor<Anonymize<I5agg650597e49>>;
        /**
         *Veto and blacklist the external proposal hash.
         *
         *The dispatch origin of this call must be `VetoOrigin`.
         *
         *- `proposal_hash`: The preimage hash of the proposal to veto and blacklist.
         *
         *Emits `Vetoed`.
         *
         *Weight: `O(V + log(V))` where V is number of `existing vetoers`
         */
        veto_external: TxDescriptor<Anonymize<I2ev73t79f46tb>>;
        /**
         *Remove a referendum.
         *
         *The dispatch origin of this call must be _Root_.
         *
         *- `ref_index`: The index of the referendum to cancel.
         *
         *# Weight: `O(1)`.
         */
        cancel_referendum: TxDescriptor<Anonymize<Ied9mja4bq7va8>>;
        /**
         *Delegate the voting power (with some given conviction) of the sending account.
         *
         *The balance delegated is locked for as long as it's delegated, and thereafter for the
         *time appropriate for the conviction's lock period.
         *
         *The dispatch origin of this call must be _Signed_, and the signing account must either:
         *  - be delegating already; or
         *  - have no voting activity (if there is, then it will need to be removed/consolidated
         *    through `reap_vote` or `unvote`).
         *
         *- `to`: The account whose voting the `target` account's voting power will follow.
         *- `conviction`: The conviction that will be attached to the delegated votes. When the
         *  account is undelegated, the funds will be locked for the corresponding period.
         *- `balance`: The amount of the account's balance to be used in delegating. This must not
         *  be more than the account's current balance.
         *
         *Emits `Delegated`.
         *
         *Weight: `O(R)` where R is the number of referendums the voter delegating to has
         *  voted on. Weight is charged as if maximum votes.
         */
        delegate: TxDescriptor<Anonymize<Ibot4i7a9t6oo8>>;
        /**
         *Undelegate the voting power of the sending account.
         *
         *Tokens may be unlocked following once an amount of time consistent with the lock period
         *of the conviction with which the delegation was issued.
         *
         *The dispatch origin of this call must be _Signed_ and the signing account must be
         *currently delegating.
         *
         *Emits `Undelegated`.
         *
         *Weight: `O(R)` where R is the number of referendums the voter delegating to has
         *  voted on. Weight is charged as if maximum votes.
         */
        undelegate: TxDescriptor<undefined>;
        /**
         *Clears all public proposals.
         *
         *The dispatch origin of this call must be _Root_.
         *
         *Weight: `O(1)`.
         */
        clear_public_proposals: TxDescriptor<undefined>;
        /**
         *Unlock tokens that have an expired lock.
         *
         *The dispatch origin of this call must be _Signed_.
         *
         *- `target`: The account to remove the lock on.
         *
         *Weight: `O(R)` with R number of vote of target.
         */
        unlock: TxDescriptor<Anonymize<Id9uqtigc0il3v>>;
        /**
         *Remove a vote for a referendum.
         *
         *If:
         *- the referendum was cancelled, or
         *- the referendum is ongoing, or
         *- the referendum has ended such that
         *  - the vote of the account was in opposition to the result; or
         *  - there was no conviction to the account's vote; or
         *  - the account made a split vote
         *...then the vote is removed cleanly and a following call to `unlock` may result in more
         *funds being available.
         *
         *If, however, the referendum has ended and:
         *- it finished corresponding to the vote of the account, and
         *- the account made a standard vote with conviction, and
         *- the lock period of the conviction is not over
         *...then the lock will be aggregated into the overall account's lock, which may involve
         **overlocking* (where the two locks are combined into a single lock that is the maximum
         *of both the amount locked and the time is it locked for).
         *
         *The dispatch origin of this call must be _Signed_, and the signer must have a vote
         *registered for referendum `index`.
         *
         *- `index`: The index of referendum of the vote to be removed.
         *
         *Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
         *  Weight is calculated for the maximum number of vote.
         */
        remove_vote: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
         *Remove a vote for a referendum.
         *
         *If the `target` is equal to the signer, then this function is exactly equivalent to
         *`remove_vote`. If not equal to the signer, then the vote must have expired,
         *either because the referendum was cancelled, because the voter lost the referendum or
         *because the conviction period is over.
         *
         *The dispatch origin of this call must be _Signed_.
         *
         *- `target`: The account of the vote to be removed; this account must have voted for
         *  referendum `index`.
         *- `index`: The index of referendum of the vote to be removed.
         *
         *Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
         *  Weight is calculated for the maximum number of vote.
         */
        remove_other_vote: TxDescriptor<Anonymize<I3hsuol7rtl0bj>>;
        /**
         *Permanently place a proposal into the blacklist. This prevents it from ever being
         *proposed again.
         *
         *If called on a queued public or external proposal, then this will result in it being
         *removed. If the `ref_index` supplied is an active referendum with the proposal hash,
         *then it will be cancelled.
         *
         *The dispatch origin of this call must be `BlacklistOrigin`.
         *
         *- `proposal_hash`: The proposal hash to blacklist permanently.
         *- `ref_index`: An ongoing referendum whose hash is `proposal_hash`, which will be
         *cancelled.
         *
         *Weight: `O(p)` (though as this is an high-privilege dispatch, we assume it has a
         *  reasonable value).
         */
        blacklist: TxDescriptor<Anonymize<I3v9h9f3mpm1l8>>;
        /**
         *Remove a proposal.
         *
         *The dispatch origin of this call must be `CancelProposalOrigin`.
         *
         *- `prop_index`: The index of the proposal to cancel.
         *
         *Weight: `O(p)` where `p = PublicProps::<T>::decode_len()`
         */
        cancel_proposal: TxDescriptor<Anonymize<I9mnj4k4u8ls2c>>;
        /**
         *Set or clear a metadata of a proposal or a referendum.
         *
         *Parameters:
         *- `origin`: Must correspond to the `MetadataOwner`.
         *    - `ExternalOrigin` for an external proposal with the `SuperMajorityApprove`
         *      threshold.
         *    - `ExternalDefaultOrigin` for an external proposal with the `SuperMajorityAgainst`
         *      threshold.
         *    - `ExternalMajorityOrigin` for an external proposal with the `SimpleMajority`
         *      threshold.
         *    - `Signed` by a creator for a public proposal.
         *    - `Signed` to clear a metadata for a finished referendum.
         *    - `Root` to set a metadata for an ongoing referendum.
         *- `owner`: an identifier of a metadata owner.
         *- `maybe_hash`: The hash of an on-chain stored preimage. `None` to clear a metadata.
         */
        set_metadata: TxDescriptor<Anonymize<I2kt2u1flctk2q>>;
    };
    Sudo: {
        /**
         *Authenticates the sudo key and dispatches a function call with `Root` origin.
         */
        sudo: TxDescriptor<Anonymize<Ied3m3aqhkq594>>;
        /**
         *Authenticates the sudo key and dispatches a function call with `Root` origin.
         *This function does not check the weight of the call, and instead allows the
         *Sudo user to specify the weight of the call.
         *
         *The dispatch origin for this call must be _Signed_.
         */
        sudo_unchecked_weight: TxDescriptor<Anonymize<I72peohofj8cck>>;
        /**
         *Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo
         *key.
         */
        set_key: TxDescriptor<Anonymize<I8k3rnvpeeh4hv>>;
        /**
         *Authenticates the sudo key and dispatches a function call with `Signed` origin from
         *a given account.
         *
         *The dispatch origin for this call must be _Signed_.
         */
        sudo_as: TxDescriptor<Anonymize<Icdhos1edq8qto>>;
        /**
         *Permanently removes the sudo key.
         *
         ***This cannot be un-done.**
         */
        remove_key: TxDescriptor<undefined>;
    };
    Scheduler: {
        /**
         *Anonymously schedule a task.
         */
        schedule: TxDescriptor<Anonymize<Ids1p0p6296skt>>;
        /**
         *Cancel an anonymously scheduled task.
         */
        cancel: TxDescriptor<Anonymize<I5n4sebgkfr760>>;
        /**
         *Schedule a named task.
         */
        schedule_named: TxDescriptor<Anonymize<I9aua630pmra10>>;
        /**
         *Cancel a named scheduled task.
         */
        cancel_named: TxDescriptor<Anonymize<Ifs1i5fk9cqvr6>>;
        /**
         *Anonymously schedule a task after a delay.
         */
        schedule_after: TxDescriptor<Anonymize<I5vhuhs9932hg5>>;
        /**
         *Schedule a named task after a delay.
         */
        schedule_named_after: TxDescriptor<Anonymize<Icce3d0juut105>>;
        /**
         *Set a retry configuration for a task so that, in case its scheduled run fails, it will
         *be retried after `period` blocks, for a total amount of `retries` retries or until it
         *succeeds.
         *
         *Tasks which need to be scheduled for a retry are still subject to weight metering and
         *agenda space, same as a regular task. If a periodic task fails, it will be scheduled
         *normally while the task is retrying.
         *
         *Tasks scheduled as a result of a retry for a periodic task are unnamed, non-periodic
         *clones of the original task. Their retry configuration will be derived from the
         *original task's configuration, but will have a lower value for `remaining` than the
         *original `total_retries`.
         */
        set_retry: TxDescriptor<Anonymize<Ieg3fd8p4pkt10>>;
        /**
         *Set a retry configuration for a named task so that, in case its scheduled run fails, it
         *will be retried after `period` blocks, for a total amount of `retries` retries or until
         *it succeeds.
         *
         *Tasks which need to be scheduled for a retry are still subject to weight metering and
         *agenda space, same as a regular task. If a periodic task fails, it will be scheduled
         *normally while the task is retrying.
         *
         *Tasks scheduled as a result of a retry for a periodic task are unnamed, non-periodic
         *clones of the original task. Their retry configuration will be derived from the
         *original task's configuration, but will have a lower value for `remaining` than the
         *original `total_retries`.
         */
        set_retry_named: TxDescriptor<Anonymize<I8kg5ll427kfqq>>;
        /**
         *Removes the retry configuration of a task.
         */
        cancel_retry: TxDescriptor<Anonymize<I467333262q1l9>>;
        /**
         *Cancel the retry configuration of a named task.
         */
        cancel_retry_named: TxDescriptor<Anonymize<Ifs1i5fk9cqvr6>>;
    };
    Identity: {
        /**
         *Add a registrar to the system.
         *
         *The dispatch origin for this call must be `T::RegistrarOrigin`.
         *
         *- `account`: the account of the registrar.
         *
         *Emits `RegistrarAdded` if successful.
         */
        add_registrar: TxDescriptor<Anonymize<Ic6cqd9g0t65v0>>;
        /**
         *Set an account's identity information and reserve the appropriate deposit.
         *
         *If the account already has identity information, the deposit is taken as part payment
         *for the new deposit.
         *
         *The dispatch origin for this call must be _Signed_.
         *
         *- `info`: The identity information.
         *
         *Emits `IdentitySet` if successful.
         */
        set_identity: TxDescriptor<Anonymize<I2kds5jji7slh8>>;
        /**
         *Set the sub-accounts of the sender.
         *
         *Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned
         *and an amount `SubAccountDeposit` will be reserved for each item in `subs`.
         *
         *The dispatch origin for this call must be _Signed_ and the sender must have a registered
         *identity.
         *
         *- `subs`: The identity's (new) sub-accounts.
         */
        set_subs: TxDescriptor<Anonymize<Ia9mkdf6l44shb>>;
        /**
         *Clear an account's identity info and all sub-accounts and return all deposits.
         *
         *Payment: All reserved balances on the account are returned.
         *
         *The dispatch origin for this call must be _Signed_ and the sender must have a registered
         *identity.
         *
         *Emits `IdentityCleared` if successful.
         */
        clear_identity: TxDescriptor<undefined>;
        /**
         *Request a judgement from a registrar.
         *
         *Payment: At most `max_fee` will be reserved for payment to the registrar if judgement
         *given.
         *
         *The dispatch origin for this call must be _Signed_ and the sender must have a
         *registered identity.
         *
         *- `reg_index`: The index of the registrar whose judgement is requested.
         *- `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:
         *
         *```nocompile
         *Registrars::<T>::get().get(reg_index).unwrap().fee
         *```
         *
         *Emits `JudgementRequested` if successful.
         */
        request_judgement: TxDescriptor<Anonymize<I9l2s4klu0831o>>;
        /**
         *Cancel a previous request.
         *
         *Payment: A previously reserved deposit is returned on success.
         *
         *The dispatch origin for this call must be _Signed_ and the sender must have a
         *registered identity.
         *
         *- `reg_index`: The index of the registrar whose judgement is no longer requested.
         *
         *Emits `JudgementUnrequested` if successful.
         */
        cancel_request: TxDescriptor<Anonymize<I2ctrt5nqb8o7c>>;
        /**
         *Set the fee required for a judgement to be requested from a registrar.
         *
         *The dispatch origin for this call must be _Signed_ and the sender must be the account
         *of the registrar whose index is `index`.
         *
         *- `index`: the index of the registrar whose fee is to be set.
         *- `fee`: the new fee.
         */
        set_fee: TxDescriptor<Anonymize<I711qahikocb1c>>;
        /**
         *Change the account associated with a registrar.
         *
         *The dispatch origin for this call must be _Signed_ and the sender must be the account
         *of the registrar whose index is `index`.
         *
         *- `index`: the index of the registrar whose fee is to be set.
         *- `new`: the new account ID.
         */
        set_account_id: TxDescriptor<Anonymize<I6o1er683vod1j>>;
        /**
         *Set the field information for a registrar.
         *
         *The dispatch origin for this call must be _Signed_ and the sender must be the account
         *of the registrar whose index is `index`.
         *
         *- `index`: the index of the registrar whose fee is to be set.
         *- `fields`: the fields that the registrar concerns themselves with.
         */
        set_fields: TxDescriptor<Anonymize<Id6gojh30v9ib2>>;
        /**
         *Provide a judgement for an account's identity.
         *
         *The dispatch origin for this call must be _Signed_ and the sender must be the account
         *of the registrar whose index is `reg_index`.
         *
         *- `reg_index`: the index of the registrar whose judgement is being made.
         *- `target`: the account whose identity the judgement is upon. This must be an account
         *  with a registered identity.
         *- `judgement`: the judgement of the registrar of index `reg_index` about `target`.
         *- `identity`: The hash of the [`IdentityInformationProvider`] for that the judgement is
         *  provided.
         *
         *Note: Judgements do not apply to a username.
         *
         *Emits `JudgementGiven` if successful.
         */
        provide_judgement: TxDescriptor<Anonymize<Ide1bahhh47lj9>>;
        /**
         *Remove an account's identity and sub-account information and slash the deposits.
         *
         *Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by
         *`Slash`. Verification request deposits are not returned; they should be cancelled
         *manually using `cancel_request`.
         *
         *The dispatch origin for this call must match `T::ForceOrigin`.
         *
         *- `target`: the account whose identity the judgement is upon. This must be an account
         *  with a registered identity.
         *
         *Emits `IdentityKilled` if successful.
         */
        kill_identity: TxDescriptor<Anonymize<Id9uqtigc0il3v>>;
        /**
         *Add the given account to the sender's subs.
         *
         *Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
         *to the sender.
         *
         *The dispatch origin for this call must be _Signed_ and the sender must have a registered
         *sub identity of `sub`.
         */
        add_sub: TxDescriptor<Anonymize<Ic68lsi7chpv5k>>;
        /**
         *Alter the associated name of the given sub-account.
         *
         *The dispatch origin for this call must be _Signed_ and the sender must have a registered
         *sub identity of `sub`.
         */
        rename_sub: TxDescriptor<Anonymize<Ic68lsi7chpv5k>>;
        /**
         *Remove the given account from the sender's subs.
         *
         *Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
         *to the sender.
         *
         *The dispatch origin for this call must be _Signed_ and the sender must have a registered
         *sub identity of `sub`.
         */
        remove_sub: TxDescriptor<Anonymize<Iek0boln8pgnko>>;
        /**
         *Remove the sender as a sub-account.
         *
         *Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
         *to the sender (*not* the original depositor).
         *
         *The dispatch origin for this call must be _Signed_ and the sender must have a registered
         *super-identity.
         *
         *NOTE: This should not normally be used, but is provided in the case that the non-
         *controller of an account is maliciously registered as a sub-account.
         */
        quit_sub: TxDescriptor<undefined>;
        /**
         *Add an `AccountId` with permission to grant usernames with a given `suffix` appended.
         *
         *The authority can grant up to `allocation` usernames. To top up their allocation, they
         *should just issue (or request via governance) a new `add_username_authority` call.
         */
        add_username_authority: TxDescriptor<Anonymize<I452bkd71b385t>>;
        /**
         *Remove `authority` from the username authorities.
         */
        remove_username_authority: TxDescriptor<Anonymize<I2mk62irjfqdo1>>;
        /**
         *Set the username for `who`. Must be called by a username authority.
         *
         *The authority must have an `allocation`. Users can either pre-sign their usernames or
         *accept them later.
         *
         *Usernames must:
         *  - Only contain lowercase ASCII characters or digits.
         *  - When combined with the suffix of the issuing authority be _less than_ the
         *    `MaxUsernameLength`.
         */
        set_username_for: TxDescriptor<Anonymize<I9pnrh0ioo3e3p>>;
        /**
         *Accept a given username that an `authority` granted. The call must include the full
         *username, as in `username.suffix`.
         */
        accept_username: TxDescriptor<Anonymize<Ie5l999tf7t2te>>;
        /**
         *Remove an expired username approval. The username was approved by an authority but never
         *accepted by the user and must now be beyond its expiration. The call must include the
         *full username, as in `username.suffix`.
         */
        remove_expired_approval: TxDescriptor<Anonymize<Ie5l999tf7t2te>>;
        /**
         *Set a given username as the primary. The username should include the suffix.
         */
        set_primary_username: TxDescriptor<Anonymize<Ie5l999tf7t2te>>;
        /**
         *Remove a username that corresponds to an account with no identity. Exists when a user
         *gets a username but then calls `clear_identity`.
         */
        remove_dangling_username: TxDescriptor<Anonymize<Ie5l999tf7t2te>>;
    };
    Proxy: {
        /**
         *Dispatch the given `call` from an account that the sender is authorised for through
         *`add_proxy`.
         *
         *The dispatch origin for this call must be _Signed_.
         *
         *Parameters:
         *- `real`: The account that the proxy will make a call on behalf of.
         *- `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
         *- `call`: The call to be made by the `real` account.
         */
        proxy: TxDescriptor<Anonymize<I8ojjnpnhtsad6>>;
        /**
         *Register a proxy account for the sender that is able to make calls on its behalf.
         *
         *The dispatch origin for this call must be _Signed_.
         *
         *Parameters:
         *- `proxy`: The account that the `caller` would like to make a proxy.
         *- `proxy_type`: The permissions allowed for this proxy account.
         *- `delay`: The announcement period required of the initial proxy. Will generally be
         *zero.
         */
        add_proxy: TxDescriptor<Anonymize<I3lj33btcqlb1i>>;
        /**
         *Unregister a proxy account for the sender.
         *
         *The dispatch origin for this call must be _Signed_.
         *
         *Parameters:
         *- `proxy`: The account that the `caller` would like to remove as a proxy.
         *- `proxy_type`: The permissions currently enabled for the removed proxy account.
         */
        remove_proxy: TxDescriptor<Anonymize<I3lj33btcqlb1i>>;
        /**
         *Unregister all proxy accounts for the sender.
         *
         *The dispatch origin for this call must be _Signed_.
         *
         *WARNING: This may be called on accounts created by `pure`, however if done, then
         *the unreserved fees will be inaccessible. **All access to this account will be lost.**
         */
        remove_proxies: TxDescriptor<undefined>;
        /**
         *Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
         *initialize it with a proxy of `proxy_type` for `origin` sender.
         *
         *Requires a `Signed` origin.
         *
         *- `proxy_type`: The type of the proxy that the sender will be registered as over the
         *new account. This will almost always be the most permissive `ProxyType` possible to
         *allow for maximum flexibility.
         *- `index`: A disambiguation index, in case this is called multiple times in the same
         *transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
         *want to use `0`.
         *- `delay`: The announcement period required of the initial proxy. Will generally be
         *zero.
         *
         *Fails with `Duplicate` if this has already been called in this transaction, from the
         *same sender, with the same parameters.
         *
         *Fails if there are insufficient funds to pay for deposit.
         */
        create_pure: TxDescriptor<Anonymize<I707m7edh0jft8>>;
        /**
         *Removes a previously spawned pure proxy.
         *
         *WARNING: **All access to this account will be lost.** Any funds held in it will be
         *inaccessible.
         *
         *Requires a `Signed` origin, and the sender account must have been created by a call to
         *`pure` with corresponding parameters.
         *
         *- `spawner`: The account that originally called `pure` to create this account.
         *- `index`: The disambiguation index originally passed to `pure`. Probably `0`.
         *- `proxy_type`: The proxy type originally passed to `pure`.
         *- `height`: The height of the chain when the call to `pure` was processed.
         *- `ext_index`: The extrinsic index in which the call to `pure` was processed.
         *
         *Fails with `NoPermission` in case the caller is not a previously created pure
         *account whose `pure` call has corresponding parameters.
         */
        kill_pure: TxDescriptor<Anonymize<I2j5sqe1l974kn>>;
        /**
         *Publish the hash of a proxy-call that will be made in the future.
         *
         *This must be called some number of blocks before the corresponding `proxy` is attempted
         *if the delay associated with the proxy relationship is greater than zero.
         *
         *No more than `MaxPending` announcements may be made at any one time.
         *
         *This will take a deposit of `AnnouncementDepositFactor` as well as
         *`AnnouncementDepositBase` if there are no other pending announcements.
         *
         *The dispatch origin for this call must be _Signed_ and a proxy of `real`.
         *
         *Parameters:
         *- `real`: The account that the proxy will make a call on behalf of.
         *- `call_hash`: The hash of the call to be made by the `real` account.
         */
        announce: TxDescriptor<Anonymize<I2eb501t8s6hsq>>;
        /**
         *Remove a given announcement.
         *
         *May be called by a proxy account to remove a call they previously announced and return
         *the deposit.
         *
         *The dispatch origin for this call must be _Signed_.
         *
         *Parameters:
         *- `real`: The account that the proxy will make a call on behalf of.
         *- `call_hash`: The hash of the call to be made by the `real` account.
         */
        remove_announcement: TxDescriptor<Anonymize<I2eb501t8s6hsq>>;
        /**
         *Remove the given announcement of a delegate.
         *
         *May be called by a target (proxied) account to remove a call that one of their delegates
         *(`delegate`) has announced they want to execute. The deposit is returned.
         *
         *The dispatch origin for this call must be _Signed_.
         *
         *Parameters:
         *- `delegate`: The account that previously announced the call.
         *- `call_hash`: The hash of the call to be made.
         */
        reject_announcement: TxDescriptor<Anonymize<Ianmuoljk2sk1u>>;
        /**
         *Dispatch the given `call` from an account that the sender is authorized for through
         *`add_proxy`.
         *
         *Removes any corresponding announcement(s).
         *
         *The dispatch origin for this call must be _Signed_.
         *
         *Parameters:
         *- `real`: The account that the proxy will make a call on behalf of.
         *- `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
         *- `call`: The call to be made by the `real` account.
         */
        proxy_announced: TxDescriptor<Anonymize<I4pbesk8pob2g3>>;
    };
    Multisig: {
        /**
         *Immediately dispatch a multi-signature call using a single approval from the caller.
         *
         *The dispatch origin for this call must be _Signed_.
         *
         *- `other_signatories`: The accounts (other than the sender) who are part of the
         *multi-signature, but do not participate in the approval process.
         *- `call`: The call to be executed.
         *
         *Result is equivalent to the dispatched result.
         *
         *## Complexity
         *O(Z + C) where Z is the length of the call and C its execution weight.
         */
        as_multi_threshold_1: TxDescriptor<Anonymize<I1s393tlvlj3g2>>;
        /**
         *Register approval for a dispatch to be made from a deterministic composite account if
         *approved by a total of `threshold - 1` of `other_signatories`.
         *
         *If there are enough, then dispatch the call.
         *
         *Payment: `DepositBase` will be reserved if this is the first approval, plus
         *`threshold` times `DepositFactor`. It is returned once this dispatch happens or
         *is cancelled.
         *
         *The dispatch origin for this call must be _Signed_.
         *
         *- `threshold`: The total number of approvals for this dispatch before it is executed.
         *- `other_signatories`: The accounts (other than the sender) who can approve this
         *dispatch. May not be empty.
         *- `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
         *not the first approval, then it must be `Some`, with the timepoint (block number and
         *transaction index) of the first approval transaction.
         *- `call`: The call to be executed.
         *
         *NOTE: Unless this is the final approval, you will generally want to use
         *`approve_as_multi` instead, since it only requires a hash of the call.
         *
         *Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
         *on success, result is `Ok` and the result from the interior call, if it was executed,
         *may be found in the deposited `MultisigExecuted` event.
         *
         *## Complexity
         *- `O(S + Z + Call)`.
         *- Up to one balance-reserve or unreserve operation.
         *- One passthrough operation, one insert, both `O(S)` where `S` is the number of
         *  signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
         *- One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
         *- One encode & hash, both of complexity `O(S)`.
         *- Up to one binary search and insert (`O(logS + S)`).
         *- I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
         *- One event.
         *- The weight of the `call`.
         *- Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
         *  taken for its lifetime of `DepositBase + threshold * DepositFactor`.
         */
        as_multi: TxDescriptor<Anonymize<I9km4hmndb2752>>;
        /**
         *Register approval for a dispatch to be made from a deterministic composite account if
         *approved by a total of `threshold - 1` of `other_signatories`.
         *
         *Payment: `DepositBase` will be reserved if this is the first approval, plus
         *`threshold` times `DepositFactor`. It is returned once this dispatch happens or
         *is cancelled.
         *
         *The dispatch origin for this call must be _Signed_.
         *
         *- `threshold`: The total number of approvals for this dispatch before it is executed.
         *- `other_signatories`: The accounts (other than the sender) who can approve this
         *dispatch. May not be empty.
         *- `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
         *not the first approval, then it must be `Some`, with the timepoint (block number and
         *transaction index) of the first approval transaction.
         *- `call_hash`: The hash of the call to be executed.
         *
         *NOTE: If this is the final approval, you will want to use `as_multi` instead.
         *
         *## Complexity
         *- `O(S)`.
         *- Up to one balance-reserve or unreserve operation.
         *- One passthrough operation, one insert, both `O(S)` where `S` is the number of
         *  signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
         *- One encode & hash, both of complexity `O(S)`.
         *- Up to one binary search and insert (`O(logS + S)`).
         *- I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
         *- One event.
         *- Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
         *  taken for its lifetime of `DepositBase + threshold * DepositFactor`.
         */
        approve_as_multi: TxDescriptor<Anonymize<Ideaemvoneh309>>;
        /**
         *Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
         *for this operation will be unreserved on success.
         *
         *The dispatch origin for this call must be _Signed_.
         *
         *- `threshold`: The total number of approvals for this dispatch before it is executed.
         *- `other_signatories`: The accounts (other than the sender) who can approve this
         *dispatch. May not be empty.
         *- `timepoint`: The timepoint (block number and transaction index) of the first approval
         *transaction for this dispatch.
         *- `call_hash`: The hash of the call to be executed.
         *
         *## Complexity
         *- `O(S)`.
         *- Up to one balance-reserve or unreserve operation.
         *- One passthrough operation, one insert, both `O(S)` where `S` is the number of
         *  signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
         *- One encode & hash, both of complexity `O(S)`.
         *- One event.
         *- I/O: 1 read `O(S)`, one remove.
         *- Storage: removes one item.
         */
        cancel_as_multi: TxDescriptor<Anonymize<I3d9o9d7epp66v>>;
    };
    Utility: {
        /**
         *Send a batch of dispatch calls.
         *
         *May be called from any origin except `None`.
         *
         *- `calls`: The calls to be dispatched from the same origin. The number of call must not
         *  exceed the constant: `batched_calls_limit` (available in constant metadata).
         *
         *If origin is root then the calls are dispatched without checking origin filter. (This
         *includes bypassing `frame_system::Config::BaseCallFilter`).
         *
         *## Complexity
         *- O(C) where C is the number of calls to be batched.
         *
         *This will return `Ok` in all circumstances. To determine the success of the batch, an
         *event is deposited. If a call failed and the batch was interrupted, then the
         *`BatchInterrupted` event is deposited, along with the number of successful calls made
         *and the error of the failed call. If all were successful, then the `BatchCompleted`
         *event is deposited.
         */
        batch: TxDescriptor<Anonymize<I5ic95hlo4ac50>>;
        /**
         *Send a call through an indexed pseudonym of the sender.
         *
         *Filter from origin are passed along. The call will be dispatched with an origin which
         *use the same filter as the origin of this call.
         *
         *NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
         *because you expect `proxy` to have been used prior in the call stack and you do not want
         *the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
         *in the Multisig pallet instead.
         *
         *NOTE: Prior to version *12, this was called `as_limited_sub`.
         *
         *The dispatch origin for this call must be _Signed_.
         */
        as_derivative: TxDescriptor<Anonymize<Ifuikepqo3n4sb>>;
        /**
         *Send a batch of dispatch calls and atomically execute them.
         *The whole transaction will rollback and fail if any of the calls failed.
         *
         *May be called from any origin except `None`.
         *
         *- `calls`: The calls to be dispatched from the same origin. The number of call must not
         *  exceed the constant: `batched_calls_limit` (available in constant metadata).
         *
         *If origin is root then the calls are dispatched without checking origin filter. (This
         *includes bypassing `frame_system::Config::BaseCallFilter`).
         *
         *## Complexity
         *- O(C) where C is the number of calls to be batched.
         */
        batch_all: TxDescriptor<Anonymize<I5ic95hlo4ac50>>;
        /**
         *Dispatches a function call with a provided origin.
         *
         *The dispatch origin for this call must be _Root_.
         *
         *## Complexity
         *- O(1).
         */
        dispatch_as: TxDescriptor<Anonymize<I5ka8cs4a1hbgg>>;
        /**
         *Send a batch of dispatch calls.
         *Unlike `batch`, it allows errors and won't interrupt.
         *
         *May be called from any origin except `None`.
         *
         *- `calls`: The calls to be dispatched from the same origin. The number of call must not
         *  exceed the constant: `batched_calls_limit` (available in constant metadata).
         *
         *If origin is root then the calls are dispatch without checking origin filter. (This
         *includes bypassing `frame_system::Config::BaseCallFilter`).
         *
         *## Complexity
         *- O(C) where C is the number of calls to be batched.
         */
        force_batch: TxDescriptor<Anonymize<I5ic95hlo4ac50>>;
        /**
         *Dispatch a function call with a specified weight.
         *
         *This function does not check the weight of the call, and instead allows the
         *Root origin to specify the weight of the call.
         *
         *The dispatch origin for this call must be _Root_.
         */
        with_weight: TxDescriptor<Anonymize<I72peohofj8cck>>;
    };
    Preimage: {
        /**
         *Register a preimage on-chain.
         *
         *If the preimage was previously requested, no fees or deposits are taken for providing
         *the preimage. Otherwise, a deposit is taken proportional to the size of the preimage.
         */
        note_preimage: TxDescriptor<Anonymize<I82nfqfkd48n10>>;
        /**
         *Clear an unrequested preimage from the runtime storage.
         *
         *If `len` is provided, then it will be a much cheaper operation.
         *
         *- `hash`: The hash of the preimage to be removed from the store.
         *- `len`: The length of the preimage of `hash`.
         */
        unnote_preimage: TxDescriptor<Anonymize<I1jm8m1rh9e20v>>;
        /**
         *Request a preimage be uploaded to the chain without paying any fees or deposits.
         *
         *If the preimage requests has already been provided on-chain, we unreserve any deposit
         *a user may have paid, and take the control of the preimage out of their hands.
         */
        request_preimage: TxDescriptor<Anonymize<I1jm8m1rh9e20v>>;
        /**
         *Clear a previously made request for a preimage.
         *
         *NOTE: THIS MUST NOT BE CALLED ON `hash` MORE TIMES THAN `request_preimage`.
         */
        unrequest_preimage: TxDescriptor<Anonymize<I1jm8m1rh9e20v>>;
        /**
         *Ensure that the a bulk of pre-images is upgraded.
         *
         *The caller pays no fee if at least 90% of pre-images were successfully updated.
         */
        ensure_updated: TxDescriptor<Anonymize<I3o5j3bli1pd8e>>;
    };
    Migrations: {
        /**
         *Allows root to set a cursor to forcefully start, stop or forward the migration process.
         *
         *Should normally not be needed and is only in place as emergency measure. Note that
         *restarting the migration process in this manner will not call the
         *[`MigrationStatusHandler::started`] hook or emit an `UpgradeStarted` event.
         */
        force_set_cursor: TxDescriptor<Anonymize<Ibou4u1engb441>>;
        /**
         *Allows root to set an active cursor to forcefully start/forward the migration process.
         *
         *This is an edge-case version of [`Self::force_set_cursor`] that allows to set the
         *`started_at` value to the next block number. Otherwise this would not be possible, since
         *`force_set_cursor` takes an absolute block number. Setting `started_at` to `None`
         *indicates that the current block number plus one should be used.
         */
        force_set_active_cursor: TxDescriptor<Anonymize<Id6nbvqoqdj4o2>>;
        /**
         *Forces the onboarding of the migrations.
         *
         *This process happens automatically on a runtime upgrade. It is in place as an emergency
         *measurement. The cursor needs to be `None` for this to succeed.
         */
        force_onboard_mbms: TxDescriptor<undefined>;
        /**
         *Clears the `Historic` set.
         *
         *`map_cursor` must be set to the last value that was returned by the
         *`HistoricCleared` event. The first time `None` can be used. `limit` must be chosen in a
         *way that will result in a sensible weight.
         */
        clear_historic: TxDescriptor<Anonymize<I95iqep3b8snn9>>;
    };
    HeroJamAffiliates: {
        /**
        
         */
        enable_affiliator: TxDescriptor<Anonymize<I27v1tss76333e>>;
        /**
        
         */
        add_affiliation: TxDescriptor<Anonymize<I79d0gjumllf3p>>;
        /**
        
         */
        remove_affiliation: TxDescriptor<Anonymize<Icbccs0ug47ilf>>;
        /**
        
         */
        set_rule_for: TxDescriptor<Anonymize<Ic2rp6bfvg2rn6>>;
        /**
        
         */
        clear_rule_for: TxDescriptor<Anonymize<Ificn2o9elqq3p>>;
    };
    HeroJamTournament: {
        /**
        
         */
        create_tournament: TxDescriptor<Anonymize<Ie1gqkgo8q4gsu>>;
        /**
        
         */
        remove_latest_tournament: TxDescriptor<Anonymize<I7efh0hns6gbqe>>;
        /**
        
         */
        claim_tournament_reward_for: TxDescriptor<Anonymize<Ichp4337m7saae>>;
        /**
        
         */
        claim_golden_duck_for: TxDescriptor<Anonymize<Ichp4337m7saae>>;
    };
    HeroJamSeasons: {
        /**
        
         */
        update_season: TxDescriptor<Anonymize<Ig6b9m3jdcffq>>;
        /**
        
         */
        interrupt_active_season: TxDescriptor<undefined>;
    };
    HeroJamSage: {
        /**
         *Set game organizer.
         */
        set_organizer: TxDescriptor<Anonymize<Ifed8uh0vbjcgd>>;
        /**
         *Update general configuration.
         */
        update_general_config: TxDescriptor<Anonymize<Ibch0l0v1nqcdq>>;
        /**
         *Updates an unlock rule for the given season.
         *
         *It doesn't affect already unlocked features.
         */
        update_unlock_rule: TxDescriptor<Anonymize<If814pe6non0j8>>;
        /**
         *Upgrade the asset inventory space.
         */
        upgrade_asset_inventory: TxDescriptor<Anonymize<I1egbk0tvjrlu0>>;
        /**
         *Updates the filter that assets need to pass for certain actions.
         */
        update_asset_filter: TxDescriptor<Anonymize<I18psftbrg8l20>>;
        /**
         *Transfers the asset with `asset_id` from the `origin` to `to`.
         *
         *It will fail if the asset transfer is disabled, the asset doesn't pass the filter
         *or if the asset is on the market.
         */
        transfer_asset: TxDescriptor<Anonymize<I9hbmjepu2be8h>>;
        /**
         *Set the price of a given asset, putting it on sale for others to buy.
         */
        set_asset_price: TxDescriptor<Anonymize<Idgsge7c4e6tn1>>;
        /**
         *Remove the price of an asset, and thereby remove it from the market.
         */
        remove_asset_price: TxDescriptor<Anonymize<Ia5le7udkgbaq9>>;
        /**
         *Attempt to buy the selected asset.
         */
        buy_asset: TxDescriptor<Anonymize<I20t8kds2svicr>>;
        /**
         *Locks an asset, making it unavailable for use.
         */
        lock_asset: TxDescriptor<Anonymize<Ia5le7udkgbaq9>>;
        /**
         *Unlocks an asset, making it available for use again.
         */
        unlock_asset: TxDescriptor<Anonymize<Ia5le7udkgbaq9>>;
        /**
         *Attempts to unlock the selected feature for the `target`.
         */
        unlock_feature: TxDescriptor<Anonymize<I9afo9k5pbihaa>>;
        /**
         *Entry point for the custom state transition.
         */
        state_transition: TxDescriptor<Anonymize<I2t9qken3l1bc>>;
    };
};
type IEvent = {
    System: {
        /**
         *An extrinsic completed successfully.
         */
        ExtrinsicSuccess: PlainDescriptor<Anonymize<Ia82mnkmeo2rhc>>;
        /**
         *An extrinsic failed.
         */
        ExtrinsicFailed: PlainDescriptor<Anonymize<I8ea275nuik3ks>>;
        /**
         *`:code` was updated.
         */
        CodeUpdated: PlainDescriptor<undefined>;
        /**
         *A new account was created.
         */
        NewAccount: PlainDescriptor<Anonymize<Icbccs0ug47ilf>>;
        /**
         *An account was reaped.
         */
        KilledAccount: PlainDescriptor<Anonymize<Icbccs0ug47ilf>>;
        /**
         *On on-chain remark happened.
         */
        Remarked: PlainDescriptor<Anonymize<I855j4i3kr8ko1>>;
        /**
         *An upgrade was authorized.
         */
        UpgradeAuthorized: PlainDescriptor<Anonymize<Ibgl04rn6nbfm6>>;
    };
    Grandpa: {
        /**
         *New authority set has been applied.
         */
        NewAuthorities: PlainDescriptor<Anonymize<I5768ac424h061>>;
        /**
         *Current authority set has been paused.
         */
        Paused: PlainDescriptor<undefined>;
        /**
         *Current authority set has been resumed.
         */
        Resumed: PlainDescriptor<undefined>;
    };
    Balances: {
        /**
         *An account was created with some free balance.
         */
        Endowed: PlainDescriptor<Anonymize<Icv68aq8841478>>;
        /**
         *An account was removed whose balance was non-zero but below ExistentialDeposit,
         *resulting in an outright loss.
         */
        DustLost: PlainDescriptor<Anonymize<Ic262ibdoec56a>>;
        /**
         *Transfer succeeded.
         */
        Transfer: PlainDescriptor<Anonymize<Iflcfm9b6nlmdd>>;
        /**
         *A balance was set by root.
         */
        BalanceSet: PlainDescriptor<Anonymize<Ijrsf4mnp3eka>>;
        /**
         *Some balance was reserved (moved from free to reserved).
         */
        Reserved: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
         *Some balance was unreserved (moved from reserved to free).
         */
        Unreserved: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
         *Some balance was moved from the reserve of the first account to the second account.
         *Final argument indicates the destination balance type.
         */
        ReserveRepatriated: PlainDescriptor<Anonymize<I8tjvj9uq4b7hi>>;
        /**
         *Some amount was deposited (e.g. for transaction fees).
         */
        Deposit: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
         *Some amount was withdrawn from the account (e.g. for transaction fees).
         */
        Withdraw: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
         *Some amount was removed from the account (e.g. for misbehavior).
         */
        Slashed: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
         *Some amount was minted into an account.
         */
        Minted: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
         *Some amount was burned from an account.
         */
        Burned: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
         *Some amount was suspended from an account (it can be restored later).
         */
        Suspended: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
         *Some amount was restored into an account.
         */
        Restored: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
         *An account was upgraded.
         */
        Upgraded: PlainDescriptor<Anonymize<I4cbvqmqadhrea>>;
        /**
         *Total issuance was increased by `amount`, creating a credit to be balanced.
         */
        Issued: PlainDescriptor<Anonymize<I3qt1hgg4djhgb>>;
        /**
         *Total issuance was decreased by `amount`, creating a debt to be balanced.
         */
        Rescinded: PlainDescriptor<Anonymize<I3qt1hgg4djhgb>>;
        /**
         *Some balance was locked.
         */
        Locked: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
         *Some balance was unlocked.
         */
        Unlocked: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
         *Some balance was frozen.
         */
        Frozen: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
         *Some balance was thawed.
         */
        Thawed: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
         *The `TotalIssuance` was forcefully changed.
         */
        TotalIssuanceForced: PlainDescriptor<Anonymize<I4fooe9dun9o0t>>;
    };
    TransactionPayment: {
        /**
         *A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
         *has been paid by `who`.
         */
        TransactionFeePaid: PlainDescriptor<Anonymize<Ier2cke86dqbr2>>;
    };
    Assets: {
        /**
         *Some asset class was created.
         */
        Created: PlainDescriptor<Anonymize<I88ff3u4dpivk>>;
        /**
         *Some assets were issued.
         */
        Issued: PlainDescriptor<Anonymize<I33cp947glv1ks>>;
        /**
         *Some assets were transferred.
         */
        Transferred: PlainDescriptor<Anonymize<Ic9om1gmmqu7rq>>;
        /**
         *Some assets were destroyed.
         */
        Burned: PlainDescriptor<Anonymize<I5hfov2b68ppb6>>;
        /**
         *The management team changed.
         */
        TeamChanged: PlainDescriptor<Anonymize<Ibthhb2m9vneds>>;
        /**
         *The owner changed.
         */
        OwnerChanged: PlainDescriptor<Anonymize<Iaitn5bqfacj7k>>;
        /**
         *Some account `who` was frozen.
         */
        Frozen: PlainDescriptor<Anonymize<If4ebvclj2ugvi>>;
        /**
         *Some account `who` was thawed.
         */
        Thawed: PlainDescriptor<Anonymize<If4ebvclj2ugvi>>;
        /**
         *Some asset `asset_id` was frozen.
         */
        AssetFrozen: PlainDescriptor<Anonymize<Ia5le7udkgbaq9>>;
        /**
         *Some asset `asset_id` was thawed.
         */
        AssetThawed: PlainDescriptor<Anonymize<Ia5le7udkgbaq9>>;
        /**
         *Accounts were destroyed for given asset.
         */
        AccountsDestroyed: PlainDescriptor<Anonymize<Ieduc1e6frq8rb>>;
        /**
         *Approvals were destroyed for given asset.
         */
        ApprovalsDestroyed: PlainDescriptor<Anonymize<I9h6gbtabovtm4>>;
        /**
         *An asset class is in the process of being destroyed.
         */
        DestructionStarted: PlainDescriptor<Anonymize<Ia5le7udkgbaq9>>;
        /**
         *An asset class was destroyed.
         */
        Destroyed: PlainDescriptor<Anonymize<Ia5le7udkgbaq9>>;
        /**
         *Some asset class was force-created.
         */
        ForceCreated: PlainDescriptor<Anonymize<Iaitn5bqfacj7k>>;
        /**
         *New metadata has been set for an asset.
         */
        MetadataSet: PlainDescriptor<Anonymize<Ifnsa0dkkpf465>>;
        /**
         *Metadata has been cleared for an asset.
         */
        MetadataCleared: PlainDescriptor<Anonymize<Ia5le7udkgbaq9>>;
        /**
         *(Additional) funds have been approved for transfer to a destination account.
         */
        ApprovedTransfer: PlainDescriptor<Anonymize<I65dtqr2egjbc3>>;
        /**
         *An approval for account `delegate` was cancelled by `owner`.
         */
        ApprovalCancelled: PlainDescriptor<Anonymize<Ibqj3vg5s5lk0c>>;
        /**
         *An `amount` was transferred in its entirety from `owner` to `destination` by
         *the approved `delegate`.
         */
        TransferredApproved: PlainDescriptor<Anonymize<I6l73u513p8rna>>;
        /**
         *An asset has had its attributes changed by the `Force` origin.
         */
        AssetStatusChanged: PlainDescriptor<Anonymize<Ia5le7udkgbaq9>>;
        /**
         *The min_balance of an asset has been updated by the asset owner.
         */
        AssetMinBalanceChanged: PlainDescriptor<Anonymize<Iefqmt2htu1dlu>>;
        /**
         *Some account `who` was created with a deposit from `depositor`.
         */
        Touched: PlainDescriptor<Anonymize<If8bgtgqrchjtu>>;
        /**
         *Some account `who` was blocked.
         */
        Blocked: PlainDescriptor<Anonymize<If4ebvclj2ugvi>>;
        /**
         *Some assets were deposited (e.g. for transaction fees).
         */
        Deposited: PlainDescriptor<Anonymize<Idusmq77988cmt>>;
        /**
         *Some assets were withdrawn from the account (e.g. for transaction fees).
         */
        Withdrawn: PlainDescriptor<Anonymize<Idusmq77988cmt>>;
    };
    Vesting: {
        /**
         *Added new vesting schedule.
         */
        VestingScheduleAdded: PlainDescriptor<Anonymize<I4uo49pmivhb33>>;
        /**
         *Claimed vesting.
         */
        Claimed: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
         *Updated vesting schedules.
         */
        VestingSchedulesUpdated: PlainDescriptor<Anonymize<I4cbvqmqadhrea>>;
    };
    Council: {
        /**
         *A motion (given hash) has been proposed (by given account) with a threshold (given
         *`MemberCount`).
         */
        Proposed: PlainDescriptor<Anonymize<Ift6f10887nk72>>;
        /**
         *A motion (given hash) has been voted on by given account, leaving
         *a tally (yes votes and no votes given respectively as `MemberCount`).
         */
        Voted: PlainDescriptor<Anonymize<I7qc53b1tvqjg2>>;
        /**
         *A motion was approved by the required threshold.
         */
        Approved: PlainDescriptor<Anonymize<I2ev73t79f46tb>>;
        /**
         *A motion was not approved by the required threshold.
         */
        Disapproved: PlainDescriptor<Anonymize<I2ev73t79f46tb>>;
        /**
         *A motion was executed; result will be `Ok` if it returned without error.
         */
        Executed: PlainDescriptor<Anonymize<I2b9fnvlgehfdo>>;
        /**
         *A single member did some action; result will be `Ok` if it returned without error.
         */
        MemberExecuted: PlainDescriptor<Anonymize<I2b9fnvlgehfdo>>;
        /**
         *A proposal was closed because its threshold was reached or after its duration was up.
         */
        Closed: PlainDescriptor<Anonymize<Iak7fhrgb9jnnq>>;
    };
    TechnicalCommittee: {
        /**
         *A motion (given hash) has been proposed (by given account) with a threshold (given
         *`MemberCount`).
         */
        Proposed: PlainDescriptor<Anonymize<Ift6f10887nk72>>;
        /**
         *A motion (given hash) has been voted on by given account, leaving
         *a tally (yes votes and no votes given respectively as `MemberCount`).
         */
        Voted: PlainDescriptor<Anonymize<I7qc53b1tvqjg2>>;
        /**
         *A motion was approved by the required threshold.
         */
        Approved: PlainDescriptor<Anonymize<I2ev73t79f46tb>>;
        /**
         *A motion was not approved by the required threshold.
         */
        Disapproved: PlainDescriptor<Anonymize<I2ev73t79f46tb>>;
        /**
         *A motion was executed; result will be `Ok` if it returned without error.
         */
        Executed: PlainDescriptor<Anonymize<I2b9fnvlgehfdo>>;
        /**
         *A single member did some action; result will be `Ok` if it returned without error.
         */
        MemberExecuted: PlainDescriptor<Anonymize<I2b9fnvlgehfdo>>;
        /**
         *A proposal was closed because its threshold was reached or after its duration was up.
         */
        Closed: PlainDescriptor<Anonymize<Iak7fhrgb9jnnq>>;
    };
    Treasury: {
        /**
         *We have ended a spend period and will now allocate funds.
         */
        Spending: PlainDescriptor<Anonymize<I8iksqi3eani0a>>;
        /**
         *Some funds have been allocated.
         */
        Awarded: PlainDescriptor<Anonymize<I16enopmju1p0q>>;
        /**
         *Some of our funds have been burnt.
         */
        Burnt: PlainDescriptor<Anonymize<I43kq8qudg7pq9>>;
        /**
         *Spending has finished; this is the amount that rolls over until next spend.
         */
        Rollover: PlainDescriptor<Anonymize<I76riseemre533>>;
        /**
         *Some funds have been deposited.
         */
        Deposit: PlainDescriptor<Anonymize<Ie5v6njpckr05b>>;
        /**
         *A new spend proposal has been approved.
         */
        SpendApproved: PlainDescriptor<Anonymize<I38bmcrmh852rk>>;
        /**
         *The inactive funds of the pallet have been updated.
         */
        UpdatedInactive: PlainDescriptor<Anonymize<I4hcillge8de5f>>;
        /**
         *A new asset spend proposal has been approved.
         */
        AssetSpendApproved: PlainDescriptor<Anonymize<I8usdc6tg7829p>>;
        /**
         *An approved spend was voided.
         */
        AssetSpendVoided: PlainDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
         *A payment happened.
         */
        Paid: PlainDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
         *A payment failed and can be retried.
         */
        PaymentFailed: PlainDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
         *A spend was processed and removed from the storage. It might have been successfully
         *paid or it may have expired.
         */
        SpendProcessed: PlainDescriptor<Anonymize<I666bl2fqjkejo>>;
    };
    Democracy: {
        /**
         *A motion has been proposed by a public account.
         */
        Proposed: PlainDescriptor<Anonymize<I3peh714diura8>>;
        /**
         *A public proposal has been tabled for referendum vote.
         */
        Tabled: PlainDescriptor<Anonymize<I3peh714diura8>>;
        /**
         *An external proposal has been tabled.
         */
        ExternalTabled: PlainDescriptor<undefined>;
        /**
         *A referendum has begun.
         */
        Started: PlainDescriptor<Anonymize<I62ffgu6q2478o>>;
        /**
         *A proposal has been approved by referendum.
         */
        Passed: PlainDescriptor<Anonymize<Ied9mja4bq7va8>>;
        /**
         *A proposal has been rejected by referendum.
         */
        NotPassed: PlainDescriptor<Anonymize<Ied9mja4bq7va8>>;
        /**
         *A referendum has been cancelled.
         */
        Cancelled: PlainDescriptor<Anonymize<Ied9mja4bq7va8>>;
        /**
         *An account has delegated their vote to another account.
         */
        Delegated: PlainDescriptor<Anonymize<I10r7il4gvbcae>>;
        /**
         *An account has cancelled a previous delegation operation.
         */
        Undelegated: PlainDescriptor<Anonymize<Icbccs0ug47ilf>>;
        /**
         *An external proposal has been vetoed.
         */
        Vetoed: PlainDescriptor<Anonymize<I2c00i2bngegk9>>;
        /**
         *A proposal_hash has been blacklisted permanently.
         */
        Blacklisted: PlainDescriptor<Anonymize<I2ev73t79f46tb>>;
        /**
         *An account has voted in a referendum
         */
        Voted: PlainDescriptor<Anonymize<Iet7kfijhihjik>>;
        /**
         *An account has seconded a proposal
         */
        Seconded: PlainDescriptor<Anonymize<I2vrbos7ogo6ps>>;
        /**
         *A proposal got canceled.
         */
        ProposalCanceled: PlainDescriptor<Anonymize<I9mnj4k4u8ls2c>>;
        /**
         *Metadata for a proposal or a referendum has been set.
         */
        MetadataSet: PlainDescriptor<Anonymize<Iffeo46j957abe>>;
        /**
         *Metadata for a proposal or a referendum has been cleared.
         */
        MetadataCleared: PlainDescriptor<Anonymize<Iffeo46j957abe>>;
        /**
         *Metadata has been transferred to new owner.
         */
        MetadataTransferred: PlainDescriptor<Anonymize<I4ljshcevmm3p2>>;
    };
    Sudo: {
        /**
         *A sudo call just took place.
         */
        Sudid: PlainDescriptor<Anonymize<I3rpaaf2gaumt>>;
        /**
         *The sudo key has been updated.
         */
        KeyChanged: PlainDescriptor<Anonymize<I5rtkmhm2dng4u>>;
        /**
         *The key was permanently removed.
         */
        KeyRemoved: PlainDescriptor<undefined>;
        /**
         *A [sudo_as](Pallet::sudo_as) call just took place.
         */
        SudoAsDone: PlainDescriptor<Anonymize<I3rpaaf2gaumt>>;
    };
    Scheduler: {
        /**
         *Scheduled some task.
         */
        Scheduled: PlainDescriptor<Anonymize<I5n4sebgkfr760>>;
        /**
         *Canceled some task.
         */
        Canceled: PlainDescriptor<Anonymize<I5n4sebgkfr760>>;
        /**
         *Dispatched some task.
         */
        Dispatched: PlainDescriptor<Anonymize<Icgaqheh7v8itg>>;
        /**
         *Set a retry configuration for some task.
         */
        RetrySet: PlainDescriptor<Anonymize<Ia3c82eadg79bj>>;
        /**
         *Cancel a retry configuration for some task.
         */
        RetryCancelled: PlainDescriptor<Anonymize<Ienusoeb625ftq>>;
        /**
         *The call for the provided hash was not found so the task has been aborted.
         */
        CallUnavailable: PlainDescriptor<Anonymize<Ienusoeb625ftq>>;
        /**
         *The given task was unable to be renewed since the agenda is full at that block.
         */
        PeriodicFailed: PlainDescriptor<Anonymize<Ienusoeb625ftq>>;
        /**
         *The given task was unable to be retried since the agenda is full at that block or there
         *was not enough weight to reschedule it.
         */
        RetryFailed: PlainDescriptor<Anonymize<Ienusoeb625ftq>>;
        /**
         *The given task can never be executed since it is overweight.
         */
        PermanentlyOverweight: PlainDescriptor<Anonymize<Ienusoeb625ftq>>;
    };
    Identity: {
        /**
         *A name was set or reset (which will remove all judgements).
         */
        IdentitySet: PlainDescriptor<Anonymize<I4cbvqmqadhrea>>;
        /**
         *A name was cleared, and the given balance returned.
         */
        IdentityCleared: PlainDescriptor<Anonymize<Iep1lmt6q3s6r3>>;
        /**
         *A name was removed and the given balance slashed.
         */
        IdentityKilled: PlainDescriptor<Anonymize<Iep1lmt6q3s6r3>>;
        /**
         *A judgement was asked from a registrar.
         */
        JudgementRequested: PlainDescriptor<Anonymize<I1fac16213rie2>>;
        /**
         *A judgement request was retracted.
         */
        JudgementUnrequested: PlainDescriptor<Anonymize<I1fac16213rie2>>;
        /**
         *A judgement was given by a registrar.
         */
        JudgementGiven: PlainDescriptor<Anonymize<Ifjt77oc391o43>>;
        /**
         *A registrar was added.
         */
        RegistrarAdded: PlainDescriptor<Anonymize<Itvt1jsipv0lc>>;
        /**
         *A sub-identity was added to an identity and the deposit paid.
         */
        SubIdentityAdded: PlainDescriptor<Anonymize<Ick3mveut33f44>>;
        /**
         *A sub-identity was removed from an identity and the deposit freed.
         */
        SubIdentityRemoved: PlainDescriptor<Anonymize<Ick3mveut33f44>>;
        /**
         *A sub-identity was cleared, and the given deposit repatriated from the
         *main identity account to the sub-identity account.
         */
        SubIdentityRevoked: PlainDescriptor<Anonymize<Ick3mveut33f44>>;
        /**
         *A username authority was added.
         */
        AuthorityAdded: PlainDescriptor<Anonymize<I2rg5btjrsqec0>>;
        /**
         *A username authority was removed.
         */
        AuthorityRemoved: PlainDescriptor<Anonymize<I2rg5btjrsqec0>>;
        /**
         *A username was set for `who`.
         */
        UsernameSet: PlainDescriptor<Anonymize<Ibdqerrooruuq9>>;
        /**
         *A username was queued, but `who` must accept it prior to `expiration`.
         */
        UsernameQueued: PlainDescriptor<Anonymize<I8u2ba9jeiu6q0>>;
        /**
         *A queued username passed its expiration without being claimed and was removed.
         */
        PreapprovalExpired: PlainDescriptor<Anonymize<I7ieadb293k6b4>>;
        /**
         *A username was set as a primary and can be looked up from `who`.
         */
        PrimaryUsernameSet: PlainDescriptor<Anonymize<Ibdqerrooruuq9>>;
        /**
         *A dangling username (as in, a username corresponding to an account that has removed its
         *identity) has been removed.
         */
        DanglingUsernameRemoved: PlainDescriptor<Anonymize<Ibdqerrooruuq9>>;
    };
    Proxy: {
        /**
         *A proxy was executed correctly, with the given.
         */
        ProxyExecuted: PlainDescriptor<Anonymize<Ifcjalo8vtb9vt>>;
        /**
         *A pure account has been created by new proxy with given
         *disambiguation index and proxy type.
         */
        PureCreated: PlainDescriptor<Anonymize<I8oc1ui5us5hik>>;
        /**
         *An announcement was placed to make a call in the future.
         */
        Announced: PlainDescriptor<Anonymize<I2ur0oeqg495j8>>;
        /**
         *A proxy was added.
         */
        ProxyAdded: PlainDescriptor<Anonymize<I7f2f3co93gefl>>;
        /**
         *A proxy was removed.
         */
        ProxyRemoved: PlainDescriptor<Anonymize<I7f2f3co93gefl>>;
    };
    Multisig: {
        /**
         *A new multisig operation has begun.
         */
        NewMultisig: PlainDescriptor<Anonymize<Iep27ialq4a7o7>>;
        /**
         *A multisig operation has been approved by someone.
         */
        MultisigApproval: PlainDescriptor<Anonymize<Iasu5jvoqr43mv>>;
        /**
         *A multisig operation has been executed.
         */
        MultisigExecuted: PlainDescriptor<Anonymize<I954a6r6d3u4mk>>;
        /**
         *A multisig operation has been cancelled.
         */
        MultisigCancelled: PlainDescriptor<Anonymize<I5qolde99acmd1>>;
    };
    Utility: {
        /**
         *Batch of dispatches did not complete fully. Index of first failing dispatch given, as
         *well as the error.
         */
        BatchInterrupted: PlainDescriptor<Anonymize<Ifc9sivp82b43c>>;
        /**
         *Batch of dispatches completed fully with no error.
         */
        BatchCompleted: PlainDescriptor<undefined>;
        /**
         *Batch of dispatches completed but has errors.
         */
        BatchCompletedWithErrors: PlainDescriptor<undefined>;
        /**
         *A single item within a Batch of dispatches has completed with no error.
         */
        ItemCompleted: PlainDescriptor<undefined>;
        /**
         *A single item within a Batch of dispatches has completed with error.
         */
        ItemFailed: PlainDescriptor<Anonymize<Ifcq4qi7fa4vci>>;
        /**
         *A call was dispatched.
         */
        DispatchedAs: PlainDescriptor<Anonymize<Ifcjalo8vtb9vt>>;
    };
    Preimage: {
        /**
         *A preimage has been noted.
         */
        Noted: PlainDescriptor<Anonymize<I1jm8m1rh9e20v>>;
        /**
         *A preimage has been requested.
         */
        Requested: PlainDescriptor<Anonymize<I1jm8m1rh9e20v>>;
        /**
         *A preimage has ben cleared.
         */
        Cleared: PlainDescriptor<Anonymize<I1jm8m1rh9e20v>>;
    };
    Migrations: {
        /**
         *A Runtime upgrade started.
         *
         *Its end is indicated by `UpgradeCompleted` or `UpgradeFailed`.
         */
        UpgradeStarted: PlainDescriptor<Anonymize<If1co0pilmi7oq>>;
        /**
         *The current runtime upgrade completed.
         *
         *This implies that all of its migrations completed successfully as well.
         */
        UpgradeCompleted: PlainDescriptor<undefined>;
        /**
         *Runtime upgrade failed.
         *
         *This is very bad and will require governance intervention.
         */
        UpgradeFailed: PlainDescriptor<undefined>;
        /**
         *A migration was skipped since it was already executed in the past.
         */
        MigrationSkipped: PlainDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
         *A migration progressed.
         */
        MigrationAdvanced: PlainDescriptor<Anonymize<Iae74gjak1qibn>>;
        /**
         *A Migration completed.
         */
        MigrationCompleted: PlainDescriptor<Anonymize<Iae74gjak1qibn>>;
        /**
         *A Migration failed.
         *
         *This implies that the whole upgrade failed and governance intervention is required.
         */
        MigrationFailed: PlainDescriptor<Anonymize<Iae74gjak1qibn>>;
        /**
         *The set of historical migrations has been cleared.
         */
        HistoricCleared: PlainDescriptor<Anonymize<I3escdojpj0551>>;
    };
    HeroJamAffiliates: {
        /**
        
         */
        AccountMarkedAsAffiliatable: PlainDescriptor<Anonymize<Ibbiemldf16hc1>>;
        /**
        
         */
        AccountAffiliated: PlainDescriptor<Anonymize<I1o0nv6o4hvf0g>>;
        /**
        
         */
        AccountUnaffiliated: PlainDescriptor<Anonymize<Icbccs0ug47ilf>>;
        /**
        
         */
        RuleAdded: PlainDescriptor<Anonymize<Ificn2o9elqq3p>>;
        /**
        
         */
        RuleCleared: PlainDescriptor<Anonymize<Ificn2o9elqq3p>>;
    };
    HeroJamTournament: {
        /**
        
         */
        TournamentCreated: PlainDescriptor<Anonymize<I2likojp7pd978>>;
        /**
        
         */
        TournamentRemoved: PlainDescriptor<Anonymize<I2likojp7pd978>>;
        /**
        
         */
        TournamentActivePeriodStarted: PlainDescriptor<Anonymize<I2likojp7pd978>>;
        /**
        
         */
        TournamentClaimPeriodStarted: PlainDescriptor<Anonymize<I2likojp7pd978>>;
        /**
        
         */
        TournamentEnded: PlainDescriptor<Anonymize<I2likojp7pd978>>;
        /**
        
         */
        EntityEnteredRanking: PlainDescriptor<Anonymize<I1c84mmo1rgd9l>>;
        /**
        
         */
        EntityBecameGoldenDuck: PlainDescriptor<Anonymize<I2tkqdqiomgb0q>>;
        /**
        
         */
        RankingRewardClaimed: PlainDescriptor<Anonymize<I3lbfq5fgdpulr>>;
        /**
        
         */
        GoldenDuckRewardClaimed: PlainDescriptor<Anonymize<I3lbfq5fgdpulr>>;
    };
    HeroJamSeasons: {
        /**
         *The season configuration for 'season_id' has been updated.
         */
        UpdatedSeason: PlainDescriptor<Anonymize<Ig6b9m3jdcffq>>;
        /**
         *The season was started during its 'early_start' by the scheduler.
         */
        SeasonEarlyStarted: PlainDescriptor<Anonymize<Idd0agfql4ht2e>>;
        /**
         *The season was started during its 'start' by the scheduler.
         */
        SeasonStarted: PlainDescriptor<Anonymize<Idd0agfql4ht2e>>;
        /**
         *The season was ended during its 'end' by the scheduler.
         */
        SeasonEnded: PlainDescriptor<Anonymize<Idd0agfql4ht2e>>;
        /**
         *The season was ended prematurely by the organizer.
         */
        SeasonEarlyEnded: PlainDescriptor<Anonymize<Idd0agfql4ht2e>>;
    };
    HeroJamSage: {
        /**
         *An organizer has been set.
         */
        OrganizerSet: PlainDescriptor<Anonymize<Ifed8uh0vbjcgd>>;
        /**
         *General configuration updated.
         */
        UpdatedGeneralConfig: PlainDescriptor<Anonymize<I2me9817djdkpb>>;
        /**
         *Unlock configuration updated for feature.
         */
        UpdatedUnlockRule: PlainDescriptor<Anonymize<I880p4chnat358>>;
        /**
         *Storage tier has been upgraded.
         */
        InventoryTierUpgraded: PlainDescriptor<Anonymize<Ifvfk4kssvhjro>>;
        /**
         *Trade filter has been updated
         */
        UpdatedTradeFilter: PlainDescriptor<Anonymize<I2ldqvlo3lagih>>;
        /**
         *Transfer filter has been updated
         */
        UpdatedTransferFilter: PlainDescriptor<Anonymize<I2ldqvlo3lagih>>;
        /**
         *Asset transferred.
         */
        AssetTransferred: PlainDescriptor<Anonymize<I8tlu1l9183dl2>>;
        /**
         *Asset has price set for trade.
         */
        AssetPriceSet: PlainDescriptor<Anonymize<Idgsge7c4e6tn1>>;
        /**
         *Asset has price removed for trade.
         */
        AssetPriceUnset: PlainDescriptor<Anonymize<Ia5le7udkgbaq9>>;
        /**
         *Asset has been traded.
         */
        AssetTraded: PlainDescriptor<Anonymize<Idm6okauo300t5>>;
        /**
         *Asset locked.
         */
        AssetLocked: PlainDescriptor<Anonymize<I1h3i3hv0od20s>>;
        /**
         *Asset unlocked.
         */
        AssetUnlocked: PlainDescriptor<Anonymize<I1h3i3hv0od20s>>;
        /**
         *A feature has been unlocked
         */
        FeatureUnlocked: PlainDescriptor<Anonymize<I3c88rdia20kf3>>;
        /**
         *A transition has been executed.
         */
        TransitionExecuted: PlainDescriptor<Anonymize<I7ormhs43si3dq>>;
    };
};
type IError = {
    System: {
        /**
         *The name of specification does not match between the current runtime
         *and the new runtime.
         */
        InvalidSpecName: PlainDescriptor<undefined>;
        /**
         *The specification version is not allowed to decrease between the current runtime
         *and the new runtime.
         */
        SpecVersionNeedsToIncrease: PlainDescriptor<undefined>;
        /**
         *Failed to extract the runtime version from the new runtime.
         *
         *Either calling `Core_version` or decoding `RuntimeVersion` failed.
         */
        FailedToExtractRuntimeVersion: PlainDescriptor<undefined>;
        /**
         *Suicide called when the account has non-default composite data.
         */
        NonDefaultComposite: PlainDescriptor<undefined>;
        /**
         *There is a non-zero reference count preventing the account from being purged.
         */
        NonZeroRefCount: PlainDescriptor<undefined>;
        /**
         *The origin filter prevent the call to be dispatched.
         */
        CallFiltered: PlainDescriptor<undefined>;
        /**
         *A multi-block migration is ongoing and prevents the current code from being replaced.
         */
        MultiBlockMigrationsOngoing: PlainDescriptor<undefined>;
        /**
         *No upgrade authorized.
         */
        NothingAuthorized: PlainDescriptor<undefined>;
        /**
         *The submitted code is not authorized.
         */
        Unauthorized: PlainDescriptor<undefined>;
    };
    Grandpa: {
        /**
         *Attempt to signal GRANDPA pause when the authority set isn't live
         *(either paused or already pending pause).
         */
        PauseFailed: PlainDescriptor<undefined>;
        /**
         *Attempt to signal GRANDPA resume when the authority set isn't paused
         *(either live or already pending resume).
         */
        ResumeFailed: PlainDescriptor<undefined>;
        /**
         *Attempt to signal GRANDPA change with one already pending.
         */
        ChangePending: PlainDescriptor<undefined>;
        /**
         *Cannot signal forced change so soon after last.
         */
        TooSoon: PlainDescriptor<undefined>;
        /**
         *A key ownership proof provided as part of an equivocation report is invalid.
         */
        InvalidKeyOwnershipProof: PlainDescriptor<undefined>;
        /**
         *An equivocation proof provided as part of an equivocation report is invalid.
         */
        InvalidEquivocationProof: PlainDescriptor<undefined>;
        /**
         *A given equivocation report is valid but already previously reported.
         */
        DuplicateOffenceReport: PlainDescriptor<undefined>;
    };
    Balances: {
        /**
         *Vesting balance too high to send value.
         */
        VestingBalance: PlainDescriptor<undefined>;
        /**
         *Account liquidity restrictions prevent withdrawal.
         */
        LiquidityRestrictions: PlainDescriptor<undefined>;
        /**
         *Balance too low to send value.
         */
        InsufficientBalance: PlainDescriptor<undefined>;
        /**
         *Value too low to create account due to existential deposit.
         */
        ExistentialDeposit: PlainDescriptor<undefined>;
        /**
         *Transfer/payment would kill account.
         */
        Expendability: PlainDescriptor<undefined>;
        /**
         *A vesting schedule already exists for this account.
         */
        ExistingVestingSchedule: PlainDescriptor<undefined>;
        /**
         *Beneficiary account must pre-exist.
         */
        DeadAccount: PlainDescriptor<undefined>;
        /**
         *Number of named reserves exceed `MaxReserves`.
         */
        TooManyReserves: PlainDescriptor<undefined>;
        /**
         *Number of holds exceed `VariantCountOf<T::RuntimeHoldReason>`.
         */
        TooManyHolds: PlainDescriptor<undefined>;
        /**
         *Number of freezes exceed `MaxFreezes`.
         */
        TooManyFreezes: PlainDescriptor<undefined>;
        /**
         *The issuance cannot be modified since it is already deactivated.
         */
        IssuanceDeactivated: PlainDescriptor<undefined>;
        /**
         *The delta cannot be zero.
         */
        DeltaZero: PlainDescriptor<undefined>;
    };
    Assets: {
        /**
         *Account balance must be greater than or equal to the transfer amount.
         */
        BalanceLow: PlainDescriptor<undefined>;
        /**
         *The account to alter does not exist.
         */
        NoAccount: PlainDescriptor<undefined>;
        /**
         *The signing account has no permission to do the operation.
         */
        NoPermission: PlainDescriptor<undefined>;
        /**
         *The given asset ID is unknown.
         */
        Unknown: PlainDescriptor<undefined>;
        /**
         *The origin account is frozen.
         */
        Frozen: PlainDescriptor<undefined>;
        /**
         *The asset ID is already taken.
         */
        InUse: PlainDescriptor<undefined>;
        /**
         *Invalid witness data given.
         */
        BadWitness: PlainDescriptor<undefined>;
        /**
         *Minimum balance should be non-zero.
         */
        MinBalanceZero: PlainDescriptor<undefined>;
        /**
         *Unable to increment the consumer reference counters on the account. Either no provider
         *reference exists to allow a non-zero balance of a non-self-sufficient asset, or one
         *fewer then the maximum number of consumers has been reached.
         */
        UnavailableConsumer: PlainDescriptor<undefined>;
        /**
         *Invalid metadata given.
         */
        BadMetadata: PlainDescriptor<undefined>;
        /**
         *No approval exists that would allow the transfer.
         */
        Unapproved: PlainDescriptor<undefined>;
        /**
         *The source account would not survive the transfer and it needs to stay alive.
         */
        WouldDie: PlainDescriptor<undefined>;
        /**
         *The asset-account already exists.
         */
        AlreadyExists: PlainDescriptor<undefined>;
        /**
         *The asset-account doesn't have an associated deposit.
         */
        NoDeposit: PlainDescriptor<undefined>;
        /**
         *The operation would result in funds being burned.
         */
        WouldBurn: PlainDescriptor<undefined>;
        /**
         *The asset is a live asset and is actively being used. Usually emit for operations such
         *as `start_destroy` which require the asset to be in a destroying state.
         */
        LiveAsset: PlainDescriptor<undefined>;
        /**
         *The asset is not live, and likely being destroyed.
         */
        AssetNotLive: PlainDescriptor<undefined>;
        /**
         *The asset status is not the expected status.
         */
        IncorrectStatus: PlainDescriptor<undefined>;
        /**
         *The asset should be frozen before the given operation.
         */
        NotFrozen: PlainDescriptor<undefined>;
        /**
         *Callback action resulted in error
         */
        CallbackFailed: PlainDescriptor<undefined>;
        /**
         *The asset ID must be equal to the [`NextAssetId`].
         */
        BadAssetId: PlainDescriptor<undefined>;
    };
    Vesting: {
        /**
         *Vesting period is zero
         */
        ZeroVestingPeriod: PlainDescriptor<undefined>;
        /**
         *Number of vests is zero
         */
        ZeroVestingPeriodCount: PlainDescriptor<undefined>;
        /**
         *Insufficient amount of balance to lock
         */
        InsufficientBalanceToLock: PlainDescriptor<undefined>;
        /**
         *This account have too many vesting schedules
         */
        TooManyVestingSchedules: PlainDescriptor<undefined>;
        /**
         *The vested transfer amount is too low
         */
        AmountLow: PlainDescriptor<undefined>;
        /**
         *Failed because the maximum vesting schedules was exceeded
         */
        MaxVestingSchedulesExceeded: PlainDescriptor<undefined>;
    };
    Council: {
        /**
         *Account is not a member
         */
        NotMember: PlainDescriptor<undefined>;
        /**
         *Duplicate proposals not allowed
         */
        DuplicateProposal: PlainDescriptor<undefined>;
        /**
         *Proposal must exist
         */
        ProposalMissing: PlainDescriptor<undefined>;
        /**
         *Mismatched index
         */
        WrongIndex: PlainDescriptor<undefined>;
        /**
         *Duplicate vote ignored
         */
        DuplicateVote: PlainDescriptor<undefined>;
        /**
         *Members are already initialized!
         */
        AlreadyInitialized: PlainDescriptor<undefined>;
        /**
         *The close call was made too early, before the end of the voting.
         */
        TooEarly: PlainDescriptor<undefined>;
        /**
         *There can only be a maximum of `MaxProposals` active proposals.
         */
        TooManyProposals: PlainDescriptor<undefined>;
        /**
         *The given weight bound for the proposal was too low.
         */
        WrongProposalWeight: PlainDescriptor<undefined>;
        /**
         *The given length bound for the proposal was too low.
         */
        WrongProposalLength: PlainDescriptor<undefined>;
        /**
         *Prime account is not a member
         */
        PrimeAccountNotMember: PlainDescriptor<undefined>;
    };
    TechnicalCommittee: {
        /**
         *Account is not a member
         */
        NotMember: PlainDescriptor<undefined>;
        /**
         *Duplicate proposals not allowed
         */
        DuplicateProposal: PlainDescriptor<undefined>;
        /**
         *Proposal must exist
         */
        ProposalMissing: PlainDescriptor<undefined>;
        /**
         *Mismatched index
         */
        WrongIndex: PlainDescriptor<undefined>;
        /**
         *Duplicate vote ignored
         */
        DuplicateVote: PlainDescriptor<undefined>;
        /**
         *Members are already initialized!
         */
        AlreadyInitialized: PlainDescriptor<undefined>;
        /**
         *The close call was made too early, before the end of the voting.
         */
        TooEarly: PlainDescriptor<undefined>;
        /**
         *There can only be a maximum of `MaxProposals` active proposals.
         */
        TooManyProposals: PlainDescriptor<undefined>;
        /**
         *The given weight bound for the proposal was too low.
         */
        WrongProposalWeight: PlainDescriptor<undefined>;
        /**
         *The given length bound for the proposal was too low.
         */
        WrongProposalLength: PlainDescriptor<undefined>;
        /**
         *Prime account is not a member
         */
        PrimeAccountNotMember: PlainDescriptor<undefined>;
    };
    Treasury: {
        /**
         *No proposal, bounty or spend at that index.
         */
        InvalidIndex: PlainDescriptor<undefined>;
        /**
         *Too many approvals in the queue.
         */
        TooManyApprovals: PlainDescriptor<undefined>;
        /**
         *The spend origin is valid but the amount it is allowed to spend is lower than the
         *amount to be spent.
         */
        InsufficientPermission: PlainDescriptor<undefined>;
        /**
         *Proposal has not been approved.
         */
        ProposalNotApproved: PlainDescriptor<undefined>;
        /**
         *The balance of the asset kind is not convertible to the balance of the native asset.
         */
        FailedToConvertBalance: PlainDescriptor<undefined>;
        /**
         *The spend has expired and cannot be claimed.
         */
        SpendExpired: PlainDescriptor<undefined>;
        /**
         *The spend is not yet eligible for payout.
         */
        EarlyPayout: PlainDescriptor<undefined>;
        /**
         *The payment has already been attempted.
         */
        AlreadyAttempted: PlainDescriptor<undefined>;
        /**
         *There was some issue with the mechanism of payment.
         */
        PayoutError: PlainDescriptor<undefined>;
        /**
         *The payout was not yet attempted/claimed.
         */
        NotAttempted: PlainDescriptor<undefined>;
        /**
         *The payment has neither failed nor succeeded yet.
         */
        Inconclusive: PlainDescriptor<undefined>;
    };
    Democracy: {
        /**
         *Value too low
         */
        ValueLow: PlainDescriptor<undefined>;
        /**
         *Proposal does not exist
         */
        ProposalMissing: PlainDescriptor<undefined>;
        /**
         *Cannot cancel the same proposal twice
         */
        AlreadyCanceled: PlainDescriptor<undefined>;
        /**
         *Proposal already made
         */
        DuplicateProposal: PlainDescriptor<undefined>;
        /**
         *Proposal still blacklisted
         */
        ProposalBlacklisted: PlainDescriptor<undefined>;
        /**
         *Next external proposal not simple majority
         */
        NotSimpleMajority: PlainDescriptor<undefined>;
        /**
         *Invalid hash
         */
        InvalidHash: PlainDescriptor<undefined>;
        /**
         *No external proposal
         */
        NoProposal: PlainDescriptor<undefined>;
        /**
         *Identity may not veto a proposal twice
         */
        AlreadyVetoed: PlainDescriptor<undefined>;
        /**
         *Vote given for invalid referendum
         */
        ReferendumInvalid: PlainDescriptor<undefined>;
        /**
         *No proposals waiting
         */
        NoneWaiting: PlainDescriptor<undefined>;
        /**
         *The given account did not vote on the referendum.
         */
        NotVoter: PlainDescriptor<undefined>;
        /**
         *The actor has no permission to conduct the action.
         */
        NoPermission: PlainDescriptor<undefined>;
        /**
         *The account is already delegating.
         */
        AlreadyDelegating: PlainDescriptor<undefined>;
        /**
         *Too high a balance was provided that the account cannot afford.
         */
        InsufficientFunds: PlainDescriptor<undefined>;
        /**
         *The account is not currently delegating.
         */
        NotDelegating: PlainDescriptor<undefined>;
        /**
         *The account currently has votes attached to it and the operation cannot succeed until
         *these are removed, either through `unvote` or `reap_vote`.
         */
        VotesExist: PlainDescriptor<undefined>;
        /**
         *The instant referendum origin is currently disallowed.
         */
        InstantNotAllowed: PlainDescriptor<undefined>;
        /**
         *Delegation to oneself makes no sense.
         */
        Nonsense: PlainDescriptor<undefined>;
        /**
         *Invalid upper bound.
         */
        WrongUpperBound: PlainDescriptor<undefined>;
        /**
         *Maximum number of votes reached.
         */
        MaxVotesReached: PlainDescriptor<undefined>;
        /**
         *Maximum number of items reached.
         */
        TooMany: PlainDescriptor<undefined>;
        /**
         *Voting period too low
         */
        VotingPeriodLow: PlainDescriptor<undefined>;
        /**
         *The preimage does not exist.
         */
        PreimageNotExist: PlainDescriptor<undefined>;
    };
    Sudo: {
        /**
         *Sender must be the Sudo account.
         */
        RequireSudo: PlainDescriptor<undefined>;
    };
    Scheduler: {
        /**
         *Failed to schedule a call
         */
        FailedToSchedule: PlainDescriptor<undefined>;
        /**
         *Cannot find the scheduled call.
         */
        NotFound: PlainDescriptor<undefined>;
        /**
         *Given target block number is in the past.
         */
        TargetBlockNumberInPast: PlainDescriptor<undefined>;
        /**
         *Reschedule failed because it does not change scheduled time.
         */
        RescheduleNoChange: PlainDescriptor<undefined>;
        /**
         *Attempt to use a non-named function on a named task.
         */
        Named: PlainDescriptor<undefined>;
    };
    Identity: {
        /**
         *Too many subs-accounts.
         */
        TooManySubAccounts: PlainDescriptor<undefined>;
        /**
         *Account isn't found.
         */
        NotFound: PlainDescriptor<undefined>;
        /**
         *Account isn't named.
         */
        NotNamed: PlainDescriptor<undefined>;
        /**
         *Empty index.
         */
        EmptyIndex: PlainDescriptor<undefined>;
        /**
         *Fee is changed.
         */
        FeeChanged: PlainDescriptor<undefined>;
        /**
         *No identity found.
         */
        NoIdentity: PlainDescriptor<undefined>;
        /**
         *Sticky judgement.
         */
        StickyJudgement: PlainDescriptor<undefined>;
        /**
         *Judgement given.
         */
        JudgementGiven: PlainDescriptor<undefined>;
        /**
         *Invalid judgement.
         */
        InvalidJudgement: PlainDescriptor<undefined>;
        /**
         *The index is invalid.
         */
        InvalidIndex: PlainDescriptor<undefined>;
        /**
         *The target is invalid.
         */
        InvalidTarget: PlainDescriptor<undefined>;
        /**
         *Maximum amount of registrars reached. Cannot add any more.
         */
        TooManyRegistrars: PlainDescriptor<undefined>;
        /**
         *Account ID is already named.
         */
        AlreadyClaimed: PlainDescriptor<undefined>;
        /**
         *Sender is not a sub-account.
         */
        NotSub: PlainDescriptor<undefined>;
        /**
         *Sub-account isn't owned by sender.
         */
        NotOwned: PlainDescriptor<undefined>;
        /**
         *The provided judgement was for a different identity.
         */
        JudgementForDifferentIdentity: PlainDescriptor<undefined>;
        /**
         *Error that occurs when there is an issue paying for judgement.
         */
        JudgementPaymentFailed: PlainDescriptor<undefined>;
        /**
         *The provided suffix is too long.
         */
        InvalidSuffix: PlainDescriptor<undefined>;
        /**
         *The sender does not have permission to issue a username.
         */
        NotUsernameAuthority: PlainDescriptor<undefined>;
        /**
         *The authority cannot allocate any more usernames.
         */
        NoAllocation: PlainDescriptor<undefined>;
        /**
         *The signature on a username was not valid.
         */
        InvalidSignature: PlainDescriptor<undefined>;
        /**
         *Setting this username requires a signature, but none was provided.
         */
        RequiresSignature: PlainDescriptor<undefined>;
        /**
         *The username does not meet the requirements.
         */
        InvalidUsername: PlainDescriptor<undefined>;
        /**
         *The username is already taken.
         */
        UsernameTaken: PlainDescriptor<undefined>;
        /**
         *The requested username does not exist.
         */
        NoUsername: PlainDescriptor<undefined>;
        /**
         *The username cannot be forcefully removed because it can still be accepted.
         */
        NotExpired: PlainDescriptor<undefined>;
    };
    Proxy: {
        /**
         *There are too many proxies registered or too many announcements pending.
         */
        TooMany: PlainDescriptor<undefined>;
        /**
         *Proxy registration not found.
         */
        NotFound: PlainDescriptor<undefined>;
        /**
         *Sender is not a proxy of the account to be proxied.
         */
        NotProxy: PlainDescriptor<undefined>;
        /**
         *A call which is incompatible with the proxy type's filter was attempted.
         */
        Unproxyable: PlainDescriptor<undefined>;
        /**
         *Account is already a proxy.
         */
        Duplicate: PlainDescriptor<undefined>;
        /**
         *Call may not be made by proxy because it may escalate its privileges.
         */
        NoPermission: PlainDescriptor<undefined>;
        /**
         *Announcement, if made at all, was made too recently.
         */
        Unannounced: PlainDescriptor<undefined>;
        /**
         *Cannot add self as proxy.
         */
        NoSelfProxy: PlainDescriptor<undefined>;
    };
    Multisig: {
        /**
         *Threshold must be 2 or greater.
         */
        MinimumThreshold: PlainDescriptor<undefined>;
        /**
         *Call is already approved by this signatory.
         */
        AlreadyApproved: PlainDescriptor<undefined>;
        /**
         *Call doesn't need any (more) approvals.
         */
        NoApprovalsNeeded: PlainDescriptor<undefined>;
        /**
         *There are too few signatories in the list.
         */
        TooFewSignatories: PlainDescriptor<undefined>;
        /**
         *There are too many signatories in the list.
         */
        TooManySignatories: PlainDescriptor<undefined>;
        /**
         *The signatories were provided out of order; they should be ordered.
         */
        SignatoriesOutOfOrder: PlainDescriptor<undefined>;
        /**
         *The sender was contained in the other signatories; it shouldn't be.
         */
        SenderInSignatories: PlainDescriptor<undefined>;
        /**
         *Multisig operation not found when attempting to cancel.
         */
        NotFound: PlainDescriptor<undefined>;
        /**
         *Only the account that originally created the multisig is able to cancel it.
         */
        NotOwner: PlainDescriptor<undefined>;
        /**
         *No timepoint was given, yet the multisig operation is already underway.
         */
        NoTimepoint: PlainDescriptor<undefined>;
        /**
         *A different timepoint was given to the multisig operation that is underway.
         */
        WrongTimepoint: PlainDescriptor<undefined>;
        /**
         *A timepoint was given, yet no multisig operation is underway.
         */
        UnexpectedTimepoint: PlainDescriptor<undefined>;
        /**
         *The maximum weight information provided was too low.
         */
        MaxWeightTooLow: PlainDescriptor<undefined>;
        /**
         *The data to be stored is already stored.
         */
        AlreadyStored: PlainDescriptor<undefined>;
    };
    Utility: {
        /**
         *Too many calls batched.
         */
        TooManyCalls: PlainDescriptor<undefined>;
    };
    Preimage: {
        /**
         *Preimage is too large to store on-chain.
         */
        TooBig: PlainDescriptor<undefined>;
        /**
         *Preimage has already been noted on-chain.
         */
        AlreadyNoted: PlainDescriptor<undefined>;
        /**
         *The user is not authorized to perform this action.
         */
        NotAuthorized: PlainDescriptor<undefined>;
        /**
         *The preimage cannot be removed since it has not yet been noted.
         */
        NotNoted: PlainDescriptor<undefined>;
        /**
         *A preimage may not be removed when there are outstanding requests.
         */
        Requested: PlainDescriptor<undefined>;
        /**
         *The preimage request cannot be removed since no outstanding requests exist.
         */
        NotRequested: PlainDescriptor<undefined>;
        /**
         *More than `MAX_HASH_UPGRADE_BULK_COUNT` hashes were requested to be upgraded at once.
         */
        TooMany: PlainDescriptor<undefined>;
        /**
         *Too few hashes were requested to be upgraded (i.e. zero).
         */
        TooFew: PlainDescriptor<undefined>;
    };
    Migrations: {
        /**
         *The operation cannot complete since some MBMs are ongoing.
         */
        Ongoing: PlainDescriptor<undefined>;
    };
    HeroJamAffiliates: {
        /**
         *An account cannot affiliate itself
         */
        CannotAffiliateSelf: PlainDescriptor<undefined>;
        /**
         *The account is not allowed to receive affiliates
         */
        TargetAccountIsNotAffiliatable: PlainDescriptor<undefined>;
        /**
         *Only whitelisted accounts can affiliate for others
         */
        AffiliateOthersOnlyWhiteListed: PlainDescriptor<undefined>;
        /**
         *No account matches the provided affiliator identifier
         */
        AffiliatorNotFound: PlainDescriptor<undefined>;
        /**
         *This account has reached the affiliate limit
         */
        CannotAffiliateMoreAccounts: PlainDescriptor<undefined>;
        /**
         *This account has already been affiliated by another affiliator
         */
        CannotAffiliateAlreadyAffiliatedAccount: PlainDescriptor<undefined>;
        /**
         *This account is already an affiliator, so it cannot affiliate to another account
         */
        CannotAffiliateToExistingAffiliator: PlainDescriptor<undefined>;
        /**
         *The account is blocked, so it cannot be affiliated to
         */
        CannotAffiliateBlocked: PlainDescriptor<undefined>;
        /**
         *The given extrinsic identifier is already paired with an affiliate rule
         */
        ExtrinsicAlreadyHasRule: PlainDescriptor<undefined>;
        /**
         *The given extrinsic identifier is not associated with any rule
         */
        ExtrinsicHasNoRule: PlainDescriptor<undefined>;
    };
    HeroJamTournament: {
        /**
         *There's no active tournament for the selected category.
         */
        NoActiveTournamentForCategory: PlainDescriptor<undefined>;
        /**
         *The current tournament is active, so it cannot be removed.
         */
        CannotRemoveActiveTournament: PlainDescriptor<undefined>;
        /**
         *The current tournament is not in its reward claim period.
         */
        TournamentNotInClaimPeriod: PlainDescriptor<undefined>;
        /**
         *The latest tournament for the selected category identifier already started,
         *so it cannot be removed anymore.
         */
        LatestTournamentAlreadyStarted: PlainDescriptor<undefined>;
        /**
         *There's already an active tournament for the selected category.
         */
        AnotherTournamentAlreadyActiveForCategory: PlainDescriptor<undefined>;
        /**
         *Cannot find tournament data for the selected (category, tournament)
         *identifier combination.
         */
        TournamentNotFound: PlainDescriptor<undefined>;
        /**
         *Cannot activate a tournament before its configured block start,
         */
        TournamentActivationTooEarly: PlainDescriptor<undefined>;
        /**
         *Cannot deactivate a tournament before its configured block end,
         */
        TournamentEndingTooEarly: PlainDescriptor<undefined>;
        /**
         *An error occurred trying to rank an entity,
         */
        FailedToRankEntity: PlainDescriptor<undefined>;
        /**
         *Tournament configuration is invalid.
         */
        InvalidTournamentConfig: PlainDescriptor<undefined>;
        /**
         *Tournament schedule already in use by another tournament.
         */
        CannotScheduleTournament: PlainDescriptor<undefined>;
        /**
         *A ranking duck candidate proposed by an account is not in the winner's table.
         */
        RankingCandidateNotInWinnerTable: PlainDescriptor<undefined>;
        /**
         *A golden duck candidate proposed by an account is not the actual golden duck winner.
         */
        GoldenDuckCandidateNotWinner: PlainDescriptor<undefined>;
        /**
         *The reward for this tournament has already been claimed
         */
        TournamentRewardAlreadyClaimed: PlainDescriptor<undefined>;
    };
    HeroJamSeasons: {
        /**
         *The season's data didn't pass its validation method.
         */
        InvalidSeasonData: PlainDescriptor<undefined>;
        /**
         *There is currently no active season
         */
        NoActiveSeason: PlainDescriptor<undefined>;
        /**
         *Cannot set season schedule wihout season config first.
         */
        CannotScheduleSeasonWithoutConfig: PlainDescriptor<undefined>;
        /**
         *The season's early start is before the current block.
         */
        SeasonStartBeforeCurrentBlock: PlainDescriptor<undefined>;
        /**
         *The season starts before the previous season starts.
         */
        SeasonStartOverlapsPreviousSeason: PlainDescriptor<undefined>;
        /**
         *The season starts after the next season starts.
         */
        SeasonStartOverlapsNextSeason: PlainDescriptor<undefined>;
        /**
         *The season's early start is earlier than its normal start.
         */
        SeasonStartBeforeEarlyStart: PlainDescriptor<undefined>;
        /**
         *The season's start block is greater than its end block.
         */
        SeasonEndBeforeStart: PlainDescriptor<undefined>;
        /**
         *The given asset was not registered in any season.
         */
        AssetNotRegistered: PlainDescriptor<undefined>;
        /**
         *The given season identifier has not been registered.
         */
        InvalidSeason: PlainDescriptor<undefined>;
        /**
         *The given season schedule update clashed with another season's schedule.
         */
        ScheduleSlotAlreadyInUse: PlainDescriptor<undefined>;
    };
    HeroJamSage: {
        /**
         *There is no account set as the organizer
         */
        OrganizerNotSet: PlainDescriptor<undefined>;
        /**
         *The asset doesn't exist.
         */
        UnknownAsset: PlainDescriptor<undefined>;
        /**
         *Transfer is not available at the moment.
         */
        TransferClosed: PlainDescriptor<undefined>;
        /**
         *Trading is not available at the moment.
         */
        TradeClosed: PlainDescriptor<undefined>;
        /**
         *Max asset ownership reached.
         */
        MaxOwnershipReached: PlainDescriptor<undefined>;
        /**
         *Max asset storage tier reached.
         */
        MaxStorageTierReached: PlainDescriptor<undefined>;
        /**
         *Asset belongs to someone else.
         */
        AssetNotOwned: PlainDescriptor<undefined>;
        /**
         *Attempt to buy already owned asset.
         */
        AlreadyOwned: PlainDescriptor<undefined>;
        /**
         *This asset cannot be used in transfer.
         */
        AssetCannotBeTransfered: PlainDescriptor<undefined>;
        /**
         *This asset cannot be used in trade.
         */
        AssetCannotBeTraded: PlainDescriptor<undefined>;
        /**
         *An asset selected for buying is not actually in sale.
         */
        AssetNotInTrade: PlainDescriptor<undefined>;
        /**
         *An asset listed for trade cannot be transferred to another account.
         */
        CannotTransferAssetInTrade: PlainDescriptor<undefined>;
        /**
         *An asset in trade cannot be locked.
         */
        CannotLockAssetInTrade: PlainDescriptor<undefined>;
        /**
         *The asset is currently locked and cannot be used.
         */
        AssetLocked: PlainDescriptor<undefined>;
        /**
         *The asset is locked by another application.
         */
        AssetLockedByOtherApplication: PlainDescriptor<undefined>;
        /**
         *The asset is not currently locked and cannot be unlocked.
         */
        AssetNotLocked: PlainDescriptor<undefined>;
        /**
         *Tried transferring to his or her own account.
         */
        CannotTransferToSelf: PlainDescriptor<undefined>;
        /**
         *The feature is locked for the current player
         */
        FeatureLocked: PlainDescriptor<undefined>;
        /**
         *The feature trying to be unlocked is not available for the selected season
         */
        FeatureUnavailableInSeason: PlainDescriptor<undefined>;
        /**
         *The feature trying to be unlocked cannot be unlocked with payment
         */
        FeatureLockedThroughPayment: PlainDescriptor<undefined>;
        /**
         *The feature trying to be unlocked has missing requirements to be fulfilled by
         *the account trying to unlock it
         */
        UnlockCriteriaNotFulfilled: PlainDescriptor<undefined>;
        /**
         *The amount of input assets in the transition is greater than 'MAX_ASSETS_IN_TRANSITION'
         */
        TooManyAssetsInTransition: PlainDescriptor<undefined>;
        /**
         *The rule for a given transition was not satisfied.
         */
        TransitionRuleNotSatisfied: PlainDescriptor<undefined>;
        /**
         *An error occurred during the state transition.
         */
        Transition: PlainDescriptor<Anonymize<Ic2rqhn799ohav>>;
    };
};
type IConstants = {
    System: {
        /**
         * Block & extrinsics weights: base values and limits.
         */
        BlockWeights: PlainDescriptor<Anonymize<In7a38730s6qs>>;
        /**
         * The maximum length of a block (in bytes).
         */
        BlockLength: PlainDescriptor<Anonymize<If15el53dd76v9>>;
        /**
         * Maximum number of block number to block hash mappings to keep (oldest pruned first).
         */
        BlockHashCount: PlainDescriptor<number>;
        /**
         * The weight of runtime database operations the runtime can invoke.
         */
        DbWeight: PlainDescriptor<Anonymize<I9s0ave7t0vnrk>>;
        /**
         * Get the chain's in-code version.
         */
        Version: PlainDescriptor<Anonymize<Ic6nglu2db2c36>>;
        /**
         * The designated SS58 prefix of this chain.
         *
         * This replaces the "ss58Format" property declared in the chain spec. Reason is
         * that the runtime should know about the prefix in order to make use of it as
         * an identifier of the chain.
         */
        SS58Prefix: PlainDescriptor<number>;
    };
    Timestamp: {
        /**
         * The minimum period between blocks.
         *
         * Be aware that this is different to the *expected* period that the block production
         * apparatus provides. Your chosen consensus system will generally work with this to
         * determine a sensible block time. For example, in the Aura pallet it will be double this
         * period on default settings.
         */
        MinimumPeriod: PlainDescriptor<bigint>;
    };
    Aura: {
        /**
         * The slot duration Aura should run with, expressed in milliseconds.
         * The effective value of this type should not change while the chain is running.
         *
         * For backwards compatibility either use [`MinimumPeriodTimesTwo`] or a const.
         */
        SlotDuration: PlainDescriptor<bigint>;
    };
    Grandpa: {
        /**
         * Max Authorities in use
         */
        MaxAuthorities: PlainDescriptor<number>;
        /**
         * The maximum number of nominators for each validator.
         */
        MaxNominators: PlainDescriptor<number>;
        /**
         * The maximum number of entries to keep in the set id to session index mapping.
         *
         * Since the `SetIdSession` map is only used for validating equivocations this
         * value should relate to the bonding duration of whatever staking system is
         * being used (if any). If equivocation handling is not enabled then this value
         * can be zero.
         */
        MaxSetIdSessionEntries: PlainDescriptor<bigint>;
    };
    Balances: {
        /**
         * The minimum amount required to keep an account open. MUST BE GREATER THAN ZERO!
         *
         * If you *really* need it to be zero, you can enable the feature `insecure_zero_ed` for
         * this pallet. However, you do so at your own risk: this will open up a major DoS vector.
         * In case you have multiple sources of provider references, you may also get unexpected
         * behaviour if you set this to zero.
         *
         * Bottom line: Do yourself a favour and make it at least one!
         */
        ExistentialDeposit: PlainDescriptor<bigint>;
        /**
         * The maximum number of locks that should exist on an account.
         * Not strictly enforced, but used for weight estimation.
         *
         * Use of locks is deprecated in favour of freezes. See `https://github.com/paritytech/substrate/pull/12951/`
         */
        MaxLocks: PlainDescriptor<number>;
        /**
         * The maximum number of named reserves that can exist on an account.
         *
         * Use of reserves is deprecated in favour of holds. See `https://github.com/paritytech/substrate/pull/12951/`
         */
        MaxReserves: PlainDescriptor<number>;
        /**
         * The maximum number of individual freeze locks that can exist on an account at any time.
         */
        MaxFreezes: PlainDescriptor<number>;
    };
    TransactionPayment: {
        /**
         * A fee multiplier for `Operational` extrinsics to compute "virtual tip" to boost their
         * `priority`
         *
         * This value is multiplied by the `final_fee` to obtain a "virtual tip" that is later
         * added to a tip component in regular `priority` calculations.
         * It means that a `Normal` transaction can front-run a similarly-sized `Operational`
         * extrinsic (with no tip), by including a tip value greater than the virtual tip.
         *
         * ```rust,ignore
         * // For `Normal`
         * let priority = priority_calc(tip);
         *
         * // For `Operational`
         * let virtual_tip = (inclusion_fee + tip) * OperationalFeeMultiplier;
         * let priority = priority_calc(tip + virtual_tip);
         * ```
         *
         * Note that since we use `final_fee` the multiplier applies also to the regular `tip`
         * sent with the transaction. So, not only does the transaction get a priority bump based
         * on the `inclusion_fee`, but we also amplify the impact of tips applied to `Operational`
         * transactions.
         */
        OperationalFeeMultiplier: PlainDescriptor<number>;
    };
    Assets: {
        /**
         * Max number of items to destroy per `destroy_accounts` and `destroy_approvals` call.
         *
         * Must be configured to result in a weight that makes each call fit in a block.
         */
        RemoveItemsLimit: PlainDescriptor<number>;
        /**
         * The basic amount of funds that must be reserved for an asset.
         */
        AssetDeposit: PlainDescriptor<bigint>;
        /**
         * The amount of funds that must be reserved for a non-provider asset account to be
         * maintained.
         */
        AssetAccountDeposit: PlainDescriptor<bigint>;
        /**
         * The basic amount of funds that must be reserved when adding metadata to your asset.
         */
        MetadataDepositBase: PlainDescriptor<bigint>;
        /**
         * The additional funds that must be reserved for the number of bytes you store in your
         * metadata.
         */
        MetadataDepositPerByte: PlainDescriptor<bigint>;
        /**
         * The amount of funds that must be reserved when creating a new approval.
         */
        ApprovalDeposit: PlainDescriptor<bigint>;
        /**
         * The maximum length of a name or symbol stored on-chain.
         */
        StringLimit: PlainDescriptor<number>;
    };
    Vesting: {
        /**
         * The minimum amount transferred to call `vested_transfer`.
         */
        MinVestedTransfer: PlainDescriptor<bigint>;
    };
    Council: {
        /**
         * The maximum weight of a dispatch call that can be proposed and executed.
         */
        MaxProposalWeight: PlainDescriptor<Anonymize<I4q39t5hn830vp>>;
    };
    TechnicalCommittee: {
        /**
         * The maximum weight of a dispatch call that can be proposed and executed.
         */
        MaxProposalWeight: PlainDescriptor<Anonymize<I4q39t5hn830vp>>;
    };
    Treasury: {
        /**
         * Period between successive spends.
         */
        SpendPeriod: PlainDescriptor<number>;
        /**
         * Percentage of spare funds (if any) that are burnt per spend period.
         */
        Burn: PlainDescriptor<number>;
        /**
         * The treasury's pallet id, used for deriving its sovereign account ID.
         */
        PalletId: PlainDescriptor<FixedSizeBinary<8>>;
        /**
         * The maximum number of approvals that can wait in the spending queue.
         *
         * NOTE: This parameter is also used within the Bounties Pallet extension if enabled.
         */
        MaxApprovals: PlainDescriptor<number>;
        /**
         * The period during which an approved treasury spend has to be claimed.
         */
        PayoutPeriod: PlainDescriptor<number>;
    };
    Democracy: {
        /**
         * The period between a proposal being approved and enacted.
         *
         * It should generally be a little more than the unstake period to ensure that
         * voting stakers have an opportunity to remove themselves from the system in the case
         * where they are on the losing side of a vote.
         */
        EnactmentPeriod: PlainDescriptor<number>;
        /**
         * How often (in blocks) new public referenda are launched.
         */
        LaunchPeriod: PlainDescriptor<number>;
        /**
         * How often (in blocks) to check for new votes.
         */
        VotingPeriod: PlainDescriptor<number>;
        /**
         * The minimum period of vote locking.
         *
         * It should be no shorter than enactment period to ensure that in the case of an approval,
         * those successful voters are locked into the consequences that their votes entail.
         */
        VoteLockingPeriod: PlainDescriptor<number>;
        /**
         * The minimum amount to be used as a deposit for a public referendum proposal.
         */
        MinimumDeposit: PlainDescriptor<bigint>;
        /**
         * Indicator for whether an emergency origin is even allowed to happen. Some chains may
         * want to set this permanently to `false`, others may want to condition it on things such
         * as an upgrade having happened recently.
         */
        InstantAllowed: PlainDescriptor<boolean>;
        /**
         * Minimum voting period allowed for a fast-track referendum.
         */
        FastTrackVotingPeriod: PlainDescriptor<number>;
        /**
         * Period in blocks where an external proposal may not be re-submitted after being vetoed.
         */
        CooloffPeriod: PlainDescriptor<number>;
        /**
         * The maximum number of votes for an account.
         *
         * Also used to compute weight, an overly big value can
         * lead to extrinsic with very big weight: see `delegate` for instance.
         */
        MaxVotes: PlainDescriptor<number>;
        /**
         * The maximum number of public proposals that can exist at any time.
         */
        MaxProposals: PlainDescriptor<number>;
        /**
         * The maximum number of deposits a public proposal may have at any time.
         */
        MaxDeposits: PlainDescriptor<number>;
        /**
         * The maximum number of items which can be blacklisted.
         */
        MaxBlacklisted: PlainDescriptor<number>;
    };
    Scheduler: {
        /**
         * The maximum weight that may be scheduled per block for any dispatchables.
         */
        MaximumWeight: PlainDescriptor<Anonymize<I4q39t5hn830vp>>;
        /**
         * The maximum number of scheduled calls in the queue for a single block.
         *
         * NOTE:
         * + Dependent pallets' benchmarks might require a higher limit for the setting. Set a
         * higher limit under `runtime-benchmarks` feature.
         */
        MaxScheduledPerBlock: PlainDescriptor<number>;
    };
    Identity: {
        /**
         * The amount held on deposit for a registered identity.
         */
        BasicDeposit: PlainDescriptor<bigint>;
        /**
         * The amount held on deposit per encoded byte for a registered identity.
         */
        ByteDeposit: PlainDescriptor<bigint>;
        /**
         * The amount held on deposit for a registered subaccount. This should account for the fact
         * that one storage item's value will increase by the size of an account ID, and there will
         * be another trie item whose value is the size of an account ID plus 32 bytes.
         */
        SubAccountDeposit: PlainDescriptor<bigint>;
        /**
         * The maximum number of sub-accounts allowed per identified account.
         */
        MaxSubAccounts: PlainDescriptor<number>;
        /**
         * Maximum number of registrars allowed in the system. Needed to bound the complexity
         * of, e.g., updating judgements.
         */
        MaxRegistrars: PlainDescriptor<number>;
        /**
         * The number of blocks within which a username grant must be accepted.
         */
        PendingUsernameExpiration: PlainDescriptor<number>;
        /**
         * The maximum length of a suffix.
         */
        MaxSuffixLength: PlainDescriptor<number>;
        /**
         * The maximum length of a username, including its suffix and any system-added delimiters.
         */
        MaxUsernameLength: PlainDescriptor<number>;
    };
    Proxy: {
        /**
         * The base amount of currency needed to reserve for creating a proxy.
         *
         * This is held for an additional storage item whose value size is
         * `sizeof(Balance)` bytes and whose key size is `sizeof(AccountId)` bytes.
         */
        ProxyDepositBase: PlainDescriptor<bigint>;
        /**
         * The amount of currency needed per proxy added.
         *
         * This is held for adding 32 bytes plus an instance of `ProxyType` more into a
         * pre-existing storage value. Thus, when configuring `ProxyDepositFactor` one should take
         * into account `32 + proxy_type.encode().len()` bytes of data.
         */
        ProxyDepositFactor: PlainDescriptor<bigint>;
        /**
         * The maximum amount of proxies allowed for a single account.
         */
        MaxProxies: PlainDescriptor<number>;
        /**
         * The maximum amount of time-delayed announcements that are allowed to be pending.
         */
        MaxPending: PlainDescriptor<number>;
        /**
         * The base amount of currency needed to reserve for creating an announcement.
         *
         * This is held when a new storage item holding a `Balance` is created (typically 16
         * bytes).
         */
        AnnouncementDepositBase: PlainDescriptor<bigint>;
        /**
         * The amount of currency needed per announcement made.
         *
         * This is held for adding an `AccountId`, `Hash` and `BlockNumber` (typically 68 bytes)
         * into a pre-existing storage value.
         */
        AnnouncementDepositFactor: PlainDescriptor<bigint>;
    };
    Multisig: {
        /**
         * The base amount of currency needed to reserve for creating a multisig execution or to
         * store a dispatch call for later.
         *
         * This is held for an additional storage item whose value size is
         * `4 + sizeof((BlockNumber, Balance, AccountId))` bytes and whose key size is
         * `32 + sizeof(AccountId)` bytes.
         */
        DepositBase: PlainDescriptor<bigint>;
        /**
         * The amount of currency needed per unit threshold when creating a multisig execution.
         *
         * This is held for adding 32 bytes more into a pre-existing storage value.
         */
        DepositFactor: PlainDescriptor<bigint>;
        /**
         * The maximum amount of signatories allowed in the multisig.
         */
        MaxSignatories: PlainDescriptor<number>;
    };
    Utility: {
        /**
         * The limit on the number of batched calls.
         */
        batched_calls_limit: PlainDescriptor<number>;
    };
    Migrations: {
        /**
         * The maximal length of an encoded cursor.
         *
         * A good default needs to selected such that no migration will ever have a cursor with MEL
         * above this limit. This is statically checked in `integrity_test`.
         */
        CursorMaxLen: PlainDescriptor<number>;
        /**
         * The maximal length of an encoded identifier.
         *
         * A good default needs to selected such that no migration will ever have an identifier
         * with MEL above this limit. This is statically checked in `integrity_test`.
         */
        IdentifierMaxLen: PlainDescriptor<number>;
    };
    HeroJamAffiliates: {
        /**
        
         */
        WhitelistKey: PlainDescriptor<FixedSizeBinary<8>>;
        /**
         * The maximum depth of the affiliate relation chain,
         */
        AffiliateMaxLevel: PlainDescriptor<number>;
    };
    HeroJamTournament: {
        /**
        
         */
        PalletId: PlainDescriptor<FixedSizeBinary<8>>;
        /**
         * Minimum duration of the tournament active and claim periods in blocks.
         */
        MinimumTournamentPhaseDuration: PlainDescriptor<number>;
    };
    HeroJamSage: {
        /**
         * This pallet's id.
         *
         * It will be used as a lock identifier when locking assets.
         */
        PalletId: PlainDescriptor<FixedSizeBinary<8>>;
    };
};
type IRuntimeCalls = {
    /**
     * The `Core` runtime api that every Substrate runtime needs to implement.
     */
    Core: {
        /**
         * Returns the version of the runtime.
         */
        version: RuntimeDescriptor<[], Anonymize<Ic6nglu2db2c36>>;
        /**
         * Execute the given block.
         */
        execute_block: RuntimeDescriptor<[block: Anonymize<Iaqet9jc3ihboe>], undefined>;
        /**
         * Initialize a block with the given header and return the runtime executive mode.
         */
        initialize_block: RuntimeDescriptor<[header: Anonymize<Ic952bubvq4k7d>], Anonymize<I2v50gu3s1aqk6>>;
    };
    /**
     * The `Metadata` api trait that returns metadata for the runtime.
     */
    Metadata: {
        /**
         * Returns the metadata of a runtime.
         */
        metadata: RuntimeDescriptor<[], Binary>;
        /**
         * Returns the metadata at a given version.
         *
         * If the given `version` isn't supported, this will return `None`.
         * Use [`Self::metadata_versions`] to find out about supported metadata version of the runtime.
         */
        metadata_at_version: RuntimeDescriptor<[version: number], Anonymize<Iabpgqcjikia83>>;
        /**
         * Returns the supported metadata versions.
         *
         * This can be used to call `metadata_at_version`.
         */
        metadata_versions: RuntimeDescriptor<[], Anonymize<Icgljjb6j82uhn>>;
    };
    /**
     * The `BlockBuilder` api trait that provides the required functionality for building a block.
     */
    BlockBuilder: {
        /**
         * Apply the given extrinsic.
         *
         * Returns an inclusion outcome which specifies if this extrinsic is included in
         * this block or not.
         */
        apply_extrinsic: RuntimeDescriptor<[extrinsic: Binary], Anonymize<I3i5slh4rot5vn>>;
        /**
         * Finish the current block.
         */
        finalize_block: RuntimeDescriptor<[], Anonymize<Ic952bubvq4k7d>>;
        /**
         * Generate inherent extrinsics. The inherent data will vary from chain to chain.
         */
        inherent_extrinsics: RuntimeDescriptor<[inherent: Anonymize<If7uv525tdvv7a>], Anonymize<Itom7fk49o0c9>>;
        /**
         * Check that the inherents are valid. The inherent data will vary from chain to chain.
         */
        check_inherents: RuntimeDescriptor<[block: Anonymize<Iaqet9jc3ihboe>, data: Anonymize<If7uv525tdvv7a>], Anonymize<I2an1fs2eiebjp>>;
    };
    /**
     * The `TaggedTransactionQueue` api trait for interfering with the transaction queue.
     */
    TaggedTransactionQueue: {
        /**
         * Validate the transaction.
         *
         * This method is invoked by the transaction pool to learn details about given transaction.
         * The implementation should make sure to verify the correctness of the transaction
         * against current state. The given `block_hash` corresponds to the hash of the block
         * that is used as current state.
         *
         * Note that this call may be performed by the pool multiple times and transactions
         * might be verified in any possible order.
         */
        validate_transaction: RuntimeDescriptor<[source: TransactionValidityTransactionSource, tx: Binary, block_hash: FixedSizeBinary<32>], Anonymize<Iajbob6uln5jct>>;
    };
    /**
     * The offchain worker api.
     */
    OffchainWorkerApi: {
        /**
         * Starts the off-chain task for given block header.
         */
        offchain_worker: RuntimeDescriptor<[header: Anonymize<Ic952bubvq4k7d>], undefined>;
    };
    /**
     * API necessary for block authorship with aura.
     */
    AuraApi: {
        /**
         * Returns the slot duration for Aura.
         *
         * Currently, only the value provided by this type at genesis will be used.
         */
        slot_duration: RuntimeDescriptor<[], bigint>;
        /**
         * Return the current set of authorities.
         */
        authorities: RuntimeDescriptor<[], Anonymize<Ic5m5lp1oioo8r>>;
    };
    /**
     * Session keys runtime api.
     */
    SessionKeys: {
        /**
         * Generate a set of session keys with optionally using the given seed.
         * The keys should be stored within the keystore exposed via runtime
         * externalities.
         *
         * The seed needs to be a valid `utf8` string.
         *
         * Returns the concatenated SCALE encoded public keys.
         */
        generate_session_keys: RuntimeDescriptor<[seed: Anonymize<Iabpgqcjikia83>], Binary>;
        /**
         * Decode the given public session keys.
         *
         * Returns the list of public raw public keys + key type.
         */
        decode_session_keys: RuntimeDescriptor<[encoded: Binary], Anonymize<Icerf8h8pdu8ss>>;
    };
    /**
     * APIs for integrating the GRANDPA finality gadget into runtimes.
     * This should be implemented on the runtime side.
     *
     * This is primarily used for negotiating authority-set changes for the
     * gadget. GRANDPA uses a signaling model of changing authority sets:
     * changes should be signaled with a delay of N blocks, and then automatically
     * applied in the runtime after those N blocks have passed.
     *
     * The consensus protocol will coordinate the handoff externally.
     */
    GrandpaApi: {
        /**
         * Get the current GRANDPA authorities and weights. This should not change except
         * for when changes are scheduled and the corresponding delay has passed.
         *
         * When called at block B, it will return the set of authorities that should be
         * used to finalize descendants of this block (B+1, B+2, ...). The block B itself
         * is finalized by the authorities from block B-1.
         */
        grandpa_authorities: RuntimeDescriptor<[], Anonymize<I3geksg000c171>>;
        /**
         * Submits an unsigned extrinsic to report an equivocation. The caller
         * must provide the equivocation proof and a key ownership proof
         * (should be obtained using `generate_key_ownership_proof`). The
         * extrinsic will be unsigned and should only be accepted for local
         * authorship (not to be broadcast to the network). This method returns
         * `None` when creation of the extrinsic fails, e.g. if equivocation
         * reporting is disabled for the given runtime (i.e. this method is
         * hardcoded to return `None`). Only useful in an offchain context.
         */
        submit_report_equivocation_unsigned_extrinsic: RuntimeDescriptor<[equivocation_proof: Anonymize<I9puqgoda8ofk4>, key_owner_proof: Binary], boolean>;
        /**
         * Generates a proof of key ownership for the given authority in the
         * given set. An example usage of this module is coupled with the
         * session historical module to prove that a given authority key is
         * tied to a given staking identity during a specific session. Proofs
         * of key ownership are necessary for submitting equivocation reports.
         * NOTE: even though the API takes a `set_id` as parameter the current
         * implementations ignore this parameter and instead rely on this
         * method being called at the correct block height, i.e. any point at
         * which the given set id is live on-chain. Future implementations will
         * instead use indexed data through an offchain worker, not requiring
         * older states to be available.
         */
        generate_key_ownership_proof: RuntimeDescriptor<[set_id: bigint, authority_id: FixedSizeBinary<32>], Anonymize<Iabpgqcjikia83>>;
        /**
         * Get current GRANDPA authority set id.
         */
        current_set_id: RuntimeDescriptor<[], bigint>;
    };
    /**
     * The API to query account nonce.
     */
    AccountNonceApi: {
        /**
         * Get current account nonce of given `AccountId`.
         */
        account_nonce: RuntimeDescriptor<[account: SS58String], number>;
    };
    /**
    
     */
    TransactionPaymentApi: {
        /**
        
         */
        query_info: RuntimeDescriptor<[uxt: Binary, len: number], Anonymize<I6spmpef2c7svf>>;
        /**
        
         */
        query_fee_details: RuntimeDescriptor<[uxt: Binary, len: number], Anonymize<Iei2mvq0mjvt81>>;
        /**
        
         */
        query_weight_to_fee: RuntimeDescriptor<[weight: Anonymize<I4q39t5hn830vp>], bigint>;
        /**
        
         */
        query_length_to_fee: RuntimeDescriptor<[length: number], bigint>;
    };
    /**
    
     */
    TransactionPaymentCallApi: {
        /**
         * Query information of a dispatch class, weight, and fee of a given encoded `Call`.
         */
        query_call_info: RuntimeDescriptor<[call: Anonymize<Iaere0445mg91r>, len: number], Anonymize<I6spmpef2c7svf>>;
        /**
         * Query fee details of a given encoded `Call`.
         */
        query_call_fee_details: RuntimeDescriptor<[call: Anonymize<Iaere0445mg91r>, len: number], Anonymize<Iei2mvq0mjvt81>>;
        /**
         * Query the output of the current `WeightToFee` given some input.
         */
        query_weight_to_fee: RuntimeDescriptor<[weight: Anonymize<I4q39t5hn830vp>], bigint>;
        /**
         * Query the output of the current `LengthToFee` given some input.
         */
        query_length_to_fee: RuntimeDescriptor<[length: number], bigint>;
    };
    /**
     * API to interact with RuntimeGenesisConfig for the runtime
     */
    GenesisBuilder: {
        /**
         * Build `RuntimeGenesisConfig` from a JSON blob not using any defaults and store it in the
         * storage.
         *
         * In the case of a FRAME-based runtime, this function deserializes the full `RuntimeGenesisConfig` from the given JSON blob and
         * puts it into the storage. If the provided JSON blob is incorrect or incomplete or the
         * deserialization fails, an error is returned.
         *
         * Please note that provided JSON blob must contain all `RuntimeGenesisConfig` fields, no
         * defaults will be used.
         */
        build_state: RuntimeDescriptor<[json: Binary], Anonymize<Ie9sr1iqcg3cgm>>;
        /**
         * Returns a JSON blob representation of the built-in `RuntimeGenesisConfig` identified by
         * `id`.
         *
         * If `id` is `None` the function returns JSON blob representation of the default
         * `RuntimeGenesisConfig` struct of the runtime. Implementation must provide default
         * `RuntimeGenesisConfig`.
         *
         * Otherwise function returns a JSON representation of the built-in, named
         * `RuntimeGenesisConfig` preset identified by `id`, or `None` if such preset does not
         * exist. Returned `Vec<u8>` contains bytes of JSON blob (patch) which comprises a list of
         * (potentially nested) key-value pairs that are intended for customizing the default
         * runtime genesis config. The patch shall be merged (rfc7386) with the JSON representation
         * of the default `RuntimeGenesisConfig` to create a comprehensive genesis config that can
         * be used in `build_state` method.
         */
        get_preset: RuntimeDescriptor<[id: Anonymize<I1mqgk2tmnn9i2>], Anonymize<Iabpgqcjikia83>>;
        /**
         * Returns a list of identifiers for available builtin `RuntimeGenesisConfig` presets.
         *
         * The presets from the list can be queried with [`GenesisBuilder::get_preset`] method. If
         * no named presets are provided by the runtime the list is empty.
         */
        preset_names: RuntimeDescriptor<[], Anonymize<I6lr8sctk0bi4e>>;
    };
};
type IAsset = PlainDescriptor<void>;
export type AjusageDispatchError = Anonymize<Im8avfv272npt>;
type PalletsTypedef = {
    __storage: IStorage;
    __tx: ICalls;
    __event: IEvent;
    __error: IError;
    __const: IConstants;
};
type IDescriptors = {
    descriptors: {
        pallets: PalletsTypedef;
        apis: IRuntimeCalls;
    } & Promise<any>;
    metadataTypes: Promise<Uint8Array>;
    asset: IAsset;
};
declare const _allDescriptors: IDescriptors;
export default _allDescriptors;
export type AjusageQueries = QueryFromPalletsDef<PalletsTypedef>;
export type AjusageCalls = TxFromPalletsDef<PalletsTypedef>;
export type AjusageEvents = EventsFromPalletsDef<PalletsTypedef>;
export type AjusageErrors = ErrorsFromPalletsDef<PalletsTypedef>;
export type AjusageConstants = ConstFromPalletsDef<PalletsTypedef>;
export type AjusageCallData = Anonymize<Iaere0445mg91r> & {
    value: {
        type: string;
    };
};
export type AjusageWhitelistEntry = PalletKey | ApiKey<IRuntimeCalls> | `query.${NestedKey<PalletsTypedef['__storage']>}` | `tx.${NestedKey<PalletsTypedef['__tx']>}` | `event.${NestedKey<PalletsTypedef['__event']>}` | `error.${NestedKey<PalletsTypedef['__error']>}` | `const.${NestedKey<PalletsTypedef['__const']>}`;
type PalletKey = `*.${keyof (IStorage & ICalls & IEvent & IError & IConstants & IRuntimeCalls)}`;
type NestedKey<D extends Record<string, Record<string, any>>> = "*" | {
    [P in keyof D & string]: `${P}.*` | {
        [N in keyof D[P] & string]: `${P}.${N}`;
    }[keyof D[P] & string];
}[keyof D & string];
type ApiKey<D extends Record<string, Record<string, any>>> = "api.*" | {
    [P in keyof D & string]: `api.${P}.*` | {
        [N in keyof D[P] & string]: `api.${P}.${N}`;
    }[keyof D[P] & string];
}[keyof D & string];
