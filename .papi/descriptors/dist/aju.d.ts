import { StorageDescriptor, PlainDescriptor, TxDescriptor, RuntimeDescriptor, Enum, QueryFromPalletsDef, TxFromPalletsDef, EventsFromPalletsDef, ErrorsFromPalletsDef, ConstFromPalletsDef, SS58String, FixedSizeBinary, Binary, FixedSizeArray } from "polkadot-api";
import { I5sesotjlssv2d, Iffmde3ekjedi9, I4mddgoa69c0a2, Ibtjoth0gq5702, I95g6i7ilua7lq, Ieniouoqkq4icf, Phase, Ibgl04rn6nbfm6, I1v7jbnil3tjns, I8jgj1nhcr2dg8, Ifn6q3equiq9qi, Ia3sb0vgvovhtg, Iav8k1edbj86k7, Itom7fk49o0c9, I4i91h98n3cv1b, I4iumukclgj8ej, Iqnbvitf7a7l3, I6r5cbv8ttrb09, I4q39t5hn830vp, Iag146hmjgqfgj, I8uo3fpd3bcc6f, I1evsr8hplu1lg, I910puuahutflf, I4nfjdef0ibh44, I74af64m08r6as, I9bhbof2vim227, I6ouflveob4eli, Icfvb3a12856o5, I9p9lq3rej5bhc, I20ejd7ofin59j, I56u24ncejr5kt, I9jd27rnpm8ttv, PreimageOldRequestStatus, PreimageRequestStatus, I4pact7n2e9a0i, I1q8tnt1cluu5j, I8ds64oj6581v0, Ia7pdug7cdsg8g, Icg2f7lij7mhun, I9bin2jc70qt6q, TransactionPaymentReleases, I199nnq793ql30, Ia2lhg7l2hilo3, Ifi4da1gej1fri, Ifvgo9568rpmqc, Icgljjb6j82uhn, I82jm9g7pufuel, Ic5m5lp1oioo8r, I6cs1itejju2vv, Ib77b0fp1a6mjr, I5g2vv0ckl2m8b, Ifup3lg9ro8a0f, XcmPalletQueryStatus, Ic4qvh5df9s5gp, I7vlvrrl2pnbgk, I50sjs3s5lud21, XcmPalletVersionMigrationStage, I50qp0ij7h62g2, Iteuj23is2ed5, I3rp19gb4dadaa, Iegrepoo0c1jc5, Idh2ug6ou4a8og, Iejeo53sea6n4q, I53esa2ms463bk, Ib4jhb8tt3uung, Iegmj7n48sc3am, I5eqns92ifde41, Iairqoj9f5otv2, I99bb69usss9gs, I6mhebgj62g585, I3vhcedhm4hpvm, I526daka7j7b17, Ifanv2kvm586s4, I5rsgtofmn5lli, Idned7t7knml6b, I2itl2k1j2q8nf, Idhr6o5ts4074r, I26oo18oer6pep, Idqvgv9ec5j9ok, I11o1lb9439n82, I2hud8khfpehps, I9b040l6qe31ee, I6ogi6ainomnvo, I9fma2nubf2fu3, I7svnfko10tq2e, I4gclh7rtr1eim, I4p5t2krb1gmvp, Ia2jsoe9nnvpnn, I18m6a0sc4k7s9, Ijsohbv0raf36, Ic9iokm15iigt6, I35m96p3u4vl0p, Iapmji0h53pmkn, Idrr42svup341f, I97h4sois29k7l, Ic9nev69d8grv1, Ic8pvmb07ungco, I72ndo6phms8ik, Inrpaqi4t8st7, I5r70ks82kp6jd, I9ce37qd80jf23, I7m7jfq6avgoub, I1sm563u0c9vca, If5qosgf4kc0ce, Idrm6gruadkcn8, I6f3f327e3k6hl, Icj2nb69liuu24, Idelpe7fpd43p4, I3qklfjubrljqh, Iag3f1hum3p4c8, I4s6jkha20aoh0, I2brm5b9jij1st, I78s05f59eoi8b, I4c0s5cioidn76, I4lgr5i5qhk4i8, In7a38730s6qs, If15el53dd76v9, I9s0ave7t0vnrk, Ic6nglu2db2c36, Iasb8k6ash5mjn, Ikjpbtmstl9nm, I8ofcg5rbj0g2c, I4adgbll7gku4i, I6pjjpfvhvcfru, I9pj91mj79qekl, I39uah9nss64h9, Ik64dknsq7k08, Ib51vk42m1po4n, I60v7bikk54tpu, Ifpj261e8s63m3, Idcr6u6361oad9, Ifue4to3kf5jlm, Ia4jql133lmqca, Ideaemvoneh309, I3d9o9d7epp66v, I653pgl2urcbb1, If4t46h5lmq7ar, I719rjdp5m0tgc, I21grdkdd0j5lm, Ic6cqd9g0t65v0, I2kds5jji7slh8, Ia9mkdf6l44shb, I9l2s4klu0831o, I2ctrt5nqb8o7c, I711qahikocb1c, I6o1er683vod1j, Id6gojh30v9ib2, Ide1bahhh47lj9, Id9uqtigc0il3v, Ic68lsi7chpv5k, Iek0boln8pgnko, I452bkd71b385t, I2mk62irjfqdo1, I9pnrh0ioo3e3p, Ie5l999tf7t2te, I8qcttesohqpgs, Id1sldaur13m9c, Ie4ebalp1vm5ac, I1m55mnvh4e9st, I2eb501t8s6hsq, Ianmuoljk2sk1u, I1ei6c5pacfuk4, I495f65dh4lrue, I5n4sebgkfr760, I7j2hf7psrqgav, Ifs1i5fk9cqvr6, I6rg05qo9icr1k, Iftj3umjp2i9v, Ieg3fd8p4pkt10, I8kg5ll427kfqq, I467333262q1l9, I82nfqfkd48n10, I1jm8m1rh9e20v, I3o5j3bli1pd8e, I4ktuaksf5i1gk, I9bqtpv2ii35mp, I9j7pagd6d4bda, I2h9pmio37r7fb, Ibmr18suc9ikh9, I9iq22t0burs89, I5u8olqbbvfnvf, I5utcetro501ir, I14u52veq53dmr, I8ajr5e1kfvl54, Id4pbsr0s25b4d, Ifccifqltb5obi, Iadtsfv699cq8b, Ialpmgmhr3gk5r, I4cbvqmqadhrea, I3sdol54kg5jaq, I8fougodaj6di6, I81vt5eq60l4b6, I3vh014cqgmrfd, I9paqujeb1fpv6, Iakevv83i18n4r, If2ssl12kcglhg, Iabk8ljl5g8c86, Ic76kfh5ebqkpl, Icrujen33bbibf, I5gi8h3e5lkbeq, Ibgm4rnf22lal1, I8mmaab8je28oo, I6r0pr82pbiftt, I40pqum1mu8qg3, I1r4c2ghbtvjuc, I6fm0bjjf17uj6, Idu1ujel33jksu, I25din0e2p6hc9, I40fog3d0qlub1, I9l97u5776hdev, Iaif2nhfhk9qc0, Icnrv1mfbd3in1, Icm9m0qeemu66d, I85tgdb4326e4k, I666bl2fqjkejo, I38jfk5li8iang, I14gl5ef7g3dei, Ifqn21l5phglgj, I2dtrijkm5601t, I2ev73t79f46tb, Ib2obgji960euh, I59bngqm85b22v, I4u4n2na1l5uo7, I3c63j6sh3evqn, I8k3rnvpeeh4hv, I1moso5oagpiea, Ibeb4n9vpjefp3, Id7murq9s9fg6h, Ied9mja4bq7va8, I4f7jul8ljs54r, I5agg650597e49, Ibot4i7a9t6oo8, I3hsuol7rtl0bj, I3v9h9f3mpm1l8, I9mnj4k4u8ls2c, I2kt2u1flctk2q, I44lh4rmpnfa0f, I9dg1d3uk3bu1b, I4fu0c1toh0cs9, I791cep71jr7vk, I17ee5lcqg58fo, Iei939moq39gbg, I2m5ipdvv5t77s, Ifed8uh0vbjcgd, I1f2jpppft84oo, Idd0agfql4ht2e, Iba6c2u0vs2tso, I7tc6iuhh6e2kj, Ibr3v4g7muoai, I9m43jftr52of7, I4bl7mag1e12kj, I63t4qjre8p07, I82ha1bkblkltf, I79d0gjumllf3p, I8na1q0fm3gru3, Icbccs0ug47ilf, Ici9ktteg8dv3n, I23pebjb6u0sjr, I48pmthsc1v95n, Idljrjthg9cgvs, Icl5mhdj63q3co, Ia6i3ugstbq8s9, I43aobns89nbkh, Iamd7rovec1hfb, I77ie723ncd4co, Id5st2uggeqkuv, Ie2e4vrmpajbaj, I967cc5plil9ee, I2fduahu6reml1, Ibc3j2befnu476, I1ahf3pvgsgbu, I736lv5q9m5bot, I9uapdn16emsti, Ie5i0q2glmr0md, I97qcg6i3l8gee, I7epd4srjf5oni, I9fs2blc4ic3ra, I55lhkfmlkf2o, I9rbronoeqvn6m, Ib71ijmpmks7if, I390pvf5otr0bf, I1crr8dg4bmmbe, Ib01fcn0puf5on, I78u60nqh0etah, I6cu7obfo0rr0o, Ibqooroq6rr5kr, I6h88h8vba22v8, I1lso3vlgherue, Ictijv9qf8cp6c, Ia816a31tsod2, I9acqpiprtu6tf, Iaf8e9qglrhih2, Ibql9001kpi744, Ibfmniebsn49g3, I61si3mpn5dd3p, I4ukhjbm2uut91, Ic357tcepuvo5c, I2rnoam876ruhj, Ic5b47dj4coa3r, Ib3qnc19gu633c, Ifira6u9hi7cu1, I72tqocvdoqfff, I2i27f3sfmvc05, I1nlrtd1epki2d, I3abtumcmempjs, Id81m8flopt8ha, I8hff7chabggkd, I49i39mtj1ivbs, Ifkr2kcak2vto1, I1ju6r8q0cs9jt, I4kpeq6j7cd5bu, I5na1ka76k6811, I59mhdb9omdqfa, I9vl5kpk0fpakt, I717jt61hu19b4, If30c5nhp9me6o, Ia5le7udkgbaq9, Ibot63dbdh2glr, I159idlqohsibn, Iakc63ljp5po9a, Id3g8b5i00okmf, I4te2k2l2kne4q, Ia82mnkmeo2rhc, I2195i78t232eh, I855j4i3kr8ko1, Idd7hd99u0ho0n, Iafscmv8tjf0ou, I100l07kaehdlp, I6gnbnvip5vvdi, Iep27ialq4a7o7, Iasu5jvoqr43mv, Iakskgs2igc674, I5qolde99acmd1, I71m9okfggihep, I3n6u7or3i8557, I5a3kd6s3btcn2, Iep1lmt6q3s6r3, I1fac16213rie2, Ifjt77oc391o43, Itvt1jsipv0lc, Ick3mveut33f44, I2rg5btjrsqec0, Ibdqerrooruuq9, I8u2ba9jeiu6q0, I7ieadb293k6b4, I7svoh0vdq580e, I2ur0oeqg495j8, I8isvjsseb7fjo, Ib8ujv25s59kho, Ia3c82eadg79bj, Ienusoeb625ftq, Icv68aq8841478, Ic262ibdoec56a, Iflcfm9b6nlmdd, Ijrsf4mnp3eka, Id5fm4p8lj5qgi, I8tjvj9uq4b7hi, I3qt1hgg4djhgb, I4fooe9dun9o0t, Ier2cke86dqbr2, I4uo49pmivhb33, I39t01nnod9109, I6v8sm60vvkmk7, I1qmtmbe5so8r3, Ih99m6ehpcar7, Idgorhsbgdq2ap, I9ubb2kqevnu6t, I2hq50pu2kdjpo, I137t1cld92pod, I2aatv5i0cb96a, Ib9msr5sr8t3dn, I3le5tr7ugg6l2, I3iun9sig164po, I2uqmls7kcdnii, Idg69klialbkb8, I13jboebjcbglr, I30pg328m00nr3, I381dkhrurdhrs, Ic8hi3qr11vngc, Ibjdlecumfu7q7, Ia9ems1kg7laoc, I92fq0fa45vi3, Id01dpp0dn2cj0, I6nu8k62ck9o8o, I6s1nbislhk619, Iea25i7vqm7ot3, I1rvj4ubaplho0, Ia3uu7lqcc1q1i, I7crucfnonitkn, I7tmrp94r9sq4n, Ic04t5m0ihvrp5, Id3ajno3thjgec, I8iksqi3eani0a, I16enopmju1p0q, I43kq8qudg7pq9, I76riseemre533, Ie5v6njpckr05b, I38bmcrmh852rk, I4hcillge8de5f, I97u3kqqqkf4si, Ift6f10887nk72, I7qc53b1tvqjg2, Iegutdktkbpgql, Iak7fhrgb9jnnq, I3peh714diura8, I62ffgu6q2478o, I10r7il4gvbcae, I2c00i2bngegk9, Iet7kfijhihjik, I2vrbos7ogo6ps, Iffeo46j957abe, I4ljshcevmm3p2, I56ac6ch45c4cm, I2gu3sldefttqk, I5982bl57vgjh6, Ibem91ufpe6rcm, Idb5ifc5af0vmt, I5dt4lseagnti4, If3sjml7g3ien6, I7qqk40o0k0k, I55fg6ai4l0792, I9gqanbbbe917p, Id1m1230297f7a, Ictgmcbe2bt2ad, I2rg9ovfh2a7s5, Icahse3uoi76n7, Ico8bnjc6taa27, Iadhr7eecq2fm4, Icc0sq4rlk4tgi, Ik93al405esnj, Ib9c9cil3ugvnt, I2v2ikqt2trp52, I9ksla2si91s56, I8fj7r4t68ah6d, I1utrf23ijcpl, I6gofc77s601c4, Ie7eurimnvna0g, It19o6q6f6q32, If0nck66gfrlf4, Ifrbvj0k5k13i4, I4cn9jhc7hlh71, Ibbiemldf16hc1, I1o0nv6o4hvf0g, Icstv6ibqm5s04, I4h808123o17rc, Ic00t9uvgue0rr, I3e2mdc36iuuk, I88ff3u4dpivk, I33cp947glv1ks, Ic9om1gmmqu7rq, I5hfov2b68ppb6, Ibthhb2m9vneds, Iaitn5bqfacj7k, If4ebvclj2ugvi, Ieduc1e6frq8rb, I9h6gbtabovtm4, Ifnsa0dkkpf465, I65dtqr2egjbc3, Ibqj3vg5s5lk0c, I6l73u513p8rna, Iefqmt2htu1dlu, If8bgtgqrchjtu, Idusmq77988cmt, I5okq99a5mhve0, Ibtl2buofcs39i, I359nvpbbb5v0e, I8t31d95clla6j, Ifcsperb0j354i, Ideuk4ni7h8umc, Icjn9u0mv2cnn4, Icjchvrijclvlv, Iaqet9jc3ihboe, Ic952bubvq4k7d, I2v50gu3s1aqk6, Iabpgqcjikia83, I1fo4p0sd7bgbi, If7uv525tdvv7a, I2an1fs2eiebjp, TransactionValidityTransactionSource, Iajbob6uln5jct, Icerf8h8pdu8ss, I6spmpef2c7svf, Iei2mvq0mjvt81, Ic1d4u2opv3fst, Ie9sr1iqcg3cgm, I1mqgk2tmnn9i2, I6lr8sctk0bi4e, I3o6sngfbhkojd } from "./common-types";
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
        Events: StorageDescriptor<[], Anonymize<Ibtjoth0gq5702>, false, never>;
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
    ParachainSystem: {
        /**
         * Latest included block descendants the runtime accepted. In other words, these are
         * ancestors of the currently executing block which have not been included in the observed
         * relay-chain state.
         *
         * The segment length is limited by the capacity returned from the [`ConsensusHook`] configured
         * in the pallet.
         */
        UnincludedSegment: StorageDescriptor<[], Anonymize<I1v7jbnil3tjns>, false, never>;
        /**
         * Storage field that keeps track of bandwidth used by the unincluded segment along with the
         * latest HRMP watermark. Used for limiting the acceptance of new blocks with
         * respect to relay chain constraints.
         */
        AggregatedUnincludedSegment: StorageDescriptor<[], Anonymize<I8jgj1nhcr2dg8>, true, never>;
        /**
         * In case of a scheduled upgrade, this storage field contains the validation code to be
         * applied.
         *
         * As soon as the relay chain gives us the go-ahead signal, we will overwrite the
         * [`:code`][sp_core::storage::well_known_keys::CODE] which will result the next block process
         * with the new validation code. This concludes the upgrade process.
         */
        PendingValidationCode: StorageDescriptor<[], Binary, false, never>;
        /**
         * Validation code that is set by the parachain and is to be communicated to collator and
         * consequently the relay-chain.
         *
         * This will be cleared in `on_initialize` of each new block if no other pallet already set
         * the value.
         */
        NewValidationCode: StorageDescriptor<[], Binary, true, never>;
        /**
         * The [`PersistedValidationData`] set for this block.
         * This value is expected to be set only once per block and it's never stored
         * in the trie.
         */
        ValidationData: StorageDescriptor<[], Anonymize<Ifn6q3equiq9qi>, true, never>;
        /**
         * Were the validation data set to notify the relay chain?
         */
        DidSetValidationCode: StorageDescriptor<[], boolean, false, never>;
        /**
         * The relay chain block number associated with the last parachain block.
         *
         * This is updated in `on_finalize`.
         */
        LastRelayChainBlockNumber: StorageDescriptor<[], number, false, never>;
        /**
         * An option which indicates if the relay-chain restricts signalling a validation code upgrade.
         * In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced
         * candidate will be invalid.
         *
         * This storage item is a mirror of the corresponding value for the current parachain from the
         * relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
         * set after the inherent.
         */
        UpgradeRestrictionSignal: StorageDescriptor<[], Anonymize<Ia3sb0vgvovhtg>, false, never>;
        /**
         * Optional upgrade go-ahead signal from the relay-chain.
         *
         * This storage item is a mirror of the corresponding value for the current parachain from the
         * relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
         * set after the inherent.
         */
        UpgradeGoAhead: StorageDescriptor<[], Anonymize<Iav8k1edbj86k7>, false, never>;
        /**
         * The state proof for the last relay parent block.
         *
         * This field is meant to be updated each block with the validation data inherent. Therefore,
         * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
         *
         * This data is also absent from the genesis.
         */
        RelayStateProof: StorageDescriptor<[], Anonymize<Itom7fk49o0c9>, true, never>;
        /**
         * The snapshot of some state related to messaging relevant to the current parachain as per
         * the relay parent.
         *
         * This field is meant to be updated each block with the validation data inherent. Therefore,
         * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
         *
         * This data is also absent from the genesis.
         */
        RelevantMessagingState: StorageDescriptor<[], Anonymize<I4i91h98n3cv1b>, true, never>;
        /**
         * The parachain host configuration that was obtained from the relay parent.
         *
         * This field is meant to be updated each block with the validation data inherent. Therefore,
         * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
         *
         * This data is also absent from the genesis.
         */
        HostConfiguration: StorageDescriptor<[], Anonymize<I4iumukclgj8ej>, true, never>;
        /**
         * The last downward message queue chain head we have observed.
         *
         * This value is loaded before and saved after processing inbound downward messages carried
         * by the system inherent.
         */
        LastDmqMqcHead: StorageDescriptor<[], FixedSizeBinary<32>, false, never>;
        /**
         * The message queue chain heads we have observed per each channel incoming channel.
         *
         * This value is loaded before and saved after processing inbound downward messages carried
         * by the system inherent.
         */
        LastHrmpMqcHeads: StorageDescriptor<[], Anonymize<Iqnbvitf7a7l3>, false, never>;
        /**
         * Number of downward messages processed in a block.
         *
         * This will be cleared in `on_initialize` of each new block.
         */
        ProcessedDownwardMessages: StorageDescriptor<[], number, false, never>;
        /**
         * HRMP watermark that was set in a block.
         *
         * This will be cleared in `on_initialize` of each new block.
         */
        HrmpWatermark: StorageDescriptor<[], number, false, never>;
        /**
         * HRMP messages that were sent in a block.
         *
         * This will be cleared in `on_initialize` of each new block.
         */
        HrmpOutboundMessages: StorageDescriptor<[], Anonymize<I6r5cbv8ttrb09>, false, never>;
        /**
         * Upward messages that were sent in a block.
         *
         * This will be cleared in `on_initialize` of each new block.
         */
        UpwardMessages: StorageDescriptor<[], Anonymize<Itom7fk49o0c9>, false, never>;
        /**
         * Upward messages that are still pending and not yet send to the relay chain.
         */
        PendingUpwardMessages: StorageDescriptor<[], Anonymize<Itom7fk49o0c9>, false, never>;
        /**
         * The factor to multiply the base delivery fee by for UMP.
         */
        UpwardDeliveryFeeFactor: StorageDescriptor<[], bigint, false, never>;
        /**
         * The number of HRMP messages we observed in `on_initialize` and thus used that number for
         * announcing the weight of `on_initialize` and `on_finalize`.
         */
        AnnouncedHrmpMessagesPerCandidate: StorageDescriptor<[], number, false, never>;
        /**
         * The weight we reserve at the beginning of the block for processing XCMP messages. This
         * overrides the amount set in the Config trait.
         */
        ReservedXcmpWeightOverride: StorageDescriptor<[], Anonymize<I4q39t5hn830vp>, true, never>;
        /**
         * The weight we reserve at the beginning of the block for processing DMP messages. This
         * overrides the amount set in the Config trait.
         */
        ReservedDmpWeightOverride: StorageDescriptor<[], Anonymize<I4q39t5hn830vp>, true, never>;
        /**
         * A custom head data that should be returned as result of `validate_block`.
         *
         * See `Pallet::set_custom_validation_head_data` for more information.
         */
        CustomValidationHeadData: StorageDescriptor<[], Binary, true, never>;
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
    ParachainInfo: {
        /**
        
         */
        ParachainId: StorageDescriptor<[], number, false, never>;
    };
    Multisig: {
        /**
         * The set of open multisig operations.
         */
        Multisigs: StorageDescriptor<Anonymize<I8uo3fpd3bcc6f>, Anonymize<Iag146hmjgqfgj>, true, never>;
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
        Proxies: StorageDescriptor<[Key: SS58String], Anonymize<Icfvb3a12856o5>, false, never>;
        /**
         * The announcements made by the proxy (key).
         */
        Announcements: StorageDescriptor<[Key: SS58String], Anonymize<I9p9lq3rej5bhc>, false, never>;
    };
    Scheduler: {
        /**
        
         */
        IncompleteSince: StorageDescriptor<[], number, true, never>;
        /**
         * Items to be executed, indexed by the block number that they should be executed on.
         */
        Agenda: StorageDescriptor<[Key: number], Anonymize<I20ejd7ofin59j>, false, never>;
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
        Holds: StorageDescriptor<[Key: SS58String], Anonymize<Icg2f7lij7mhun>, false, never>;
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
    Vesting: {
        /**
         * Vesting schedules of an account.
         *
         * VestingSchedules: map AccountId => Vec<VestingSchedule>
         */
        VestingSchedules: StorageDescriptor<[Key: SS58String], Anonymize<I199nnq793ql30>, false, never>;
    };
    Authorship: {
        /**
         * Author of current block.
         */
        Author: StorageDescriptor<[], SS58String, true, never>;
    };
    CollatorSelection: {
        /**
         * The invulnerable, permissioned collators. This list must be sorted.
         */
        Invulnerables: StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, false, never>;
        /**
         * The (community, limited) collation candidates. `Candidates` and `Invulnerables` should be
         * mutually exclusive.
         *
         * This list is sorted in ascending order by deposit and when the deposits are equal, the least
         * recently updated is considered greater.
         */
        CandidateList: StorageDescriptor<[], Anonymize<Ifi4da1gej1fri>, false, never>;
        /**
         * Last block authored by collator.
         */
        LastAuthoredBlock: StorageDescriptor<[Key: SS58String], number, false, never>;
        /**
         * Desired number of candidates.
         *
         * This should ideally always be less than [`Config::MaxCandidates`] for weights to be correct.
         */
        DesiredCandidates: StorageDescriptor<[], number, false, never>;
        /**
         * Fixed amount to deposit to become a collator.
         *
         * When a collator calls `leave_intent` they immediately receive the deposit back.
         */
        CandidacyBond: StorageDescriptor<[], bigint, false, never>;
    };
    Session: {
        /**
         * The current set of validators.
         */
        Validators: StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, false, never>;
        /**
         * Current index of the session.
         */
        CurrentIndex: StorageDescriptor<[], number, false, never>;
        /**
         * True if the underlying economic identities or weighting behind the validators
         * has changed in the queued validator set.
         */
        QueuedChanged: StorageDescriptor<[], boolean, false, never>;
        /**
         * The queued keys for the next session. When the next session begins, these keys
         * will be used to determine the validator's session keys.
         */
        QueuedKeys: StorageDescriptor<[], Anonymize<Ifvgo9568rpmqc>, false, never>;
        /**
         * Indices of disabled validators.
         *
         * The vec is always kept sorted so that we can find whether a given validator is
         * disabled using binary search. It gets cleared when `on_session_ending` returns
         * a new set of identities.
         */
        DisabledValidators: StorageDescriptor<[], Anonymize<Icgljjb6j82uhn>, false, never>;
        /**
         * The next session keys for a validator.
         */
        NextKeys: StorageDescriptor<[Key: SS58String], FixedSizeBinary<32>, true, never>;
        /**
         * The owner of a key. The key is the `KeyTypeId` + the encoded key.
         */
        KeyOwner: StorageDescriptor<[Key: Anonymize<I82jm9g7pufuel>], SS58String, true, never>;
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
    AuraExt: {
        /**
         * Serves as cache for the authorities.
         *
         * The authorities in AuRa are overwritten in `on_initialize` when we switch to a new session,
         * but we require the old authorities to verify the seal when validating a PoV. This will
         * always be updated to the latest AuRa authorities in `on_finalize`.
         */
        Authorities: StorageDescriptor<[], Anonymize<Ic5m5lp1oioo8r>, false, never>;
        /**
         * Current slot paired with a number of authored blocks.
         *
         * Updated on each block initialization.
         */
        SlotInfo: StorageDescriptor<[], Anonymize<I6cs1itejju2vv>, true, never>;
    };
    XcmpQueue: {
        /**
         * The suspended inbound XCMP channels. All others are not suspended.
         *
         * This is a `StorageValue` instead of a `StorageMap` since we expect multiple reads per block
         * to different keys with a one byte payload. The access to `BoundedBTreeSet` will be cached
         * within the block and therefore only included once in the proof size.
         *
         * NOTE: The PoV benchmarking cannot know this and will over-estimate, but the actual proof
         * will be smaller.
         */
        InboundXcmpSuspended: StorageDescriptor<[], Anonymize<Icgljjb6j82uhn>, false, never>;
        /**
         * The non-empty XCMP channels in order of becoming non-empty, and the index of the first
         * and last outbound message. If the two indices are equal, then it indicates an empty
         * queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
         * than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
         * case of the need to send a high-priority signal message this block.
         * The bool is true if there is a signal message waiting to be sent.
         */
        OutboundXcmpStatus: StorageDescriptor<[], Anonymize<Ib77b0fp1a6mjr>, false, never>;
        /**
         * The messages outbound in a given XCMP channel.
         */
        OutboundXcmpMessages: StorageDescriptor<Anonymize<I5g2vv0ckl2m8b>, Binary, false, never>;
        /**
         * Any signal messages waiting to be sent.
         */
        SignalMessages: StorageDescriptor<[Key: number], Binary, false, never>;
        /**
         * The configuration which controls the dynamics of the outbound queue.
         */
        QueueConfig: StorageDescriptor<[], Anonymize<Ifup3lg9ro8a0f>, false, never>;
        /**
         * Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
         */
        QueueSuspended: StorageDescriptor<[], boolean, false, never>;
        /**
         * The factor to multiply the base delivery fee by.
         */
        DeliveryFeeFactor: StorageDescriptor<[Key: number], bigint, false, never>;
    };
    PolkadotXcm: {
        /**
         * The latest available query index.
         */
        QueryCounter: StorageDescriptor<[], bigint, false, never>;
        /**
         * The ongoing queries.
         */
        Queries: StorageDescriptor<[Key: bigint], XcmPalletQueryStatus, true, never>;
        /**
         * The existing asset traps.
         *
         * Key is the blake2 256 hash of (origin, versioned `Assets`) pair. Value is the number of
         * times this pair has been trapped (usually just 1 if it exists at all).
         */
        AssetTraps: StorageDescriptor<[Key: FixedSizeBinary<32>], number, false, never>;
        /**
         * Default version to encode XCM when latest version of destination is unknown. If `None`,
         * then the destinations whose XCM version is unknown are considered unreachable.
         */
        SafeXcmVersion: StorageDescriptor<[], number, true, never>;
        /**
         * The Latest versions that we know various locations support.
         */
        SupportedVersion: StorageDescriptor<Anonymize<Ic4qvh5df9s5gp>, number, true, never>;
        /**
         * All locations that we have requested version notifications from.
         */
        VersionNotifiers: StorageDescriptor<Anonymize<Ic4qvh5df9s5gp>, bigint, true, never>;
        /**
         * The target locations that are subscribed to our version changes, as well as the most recent
         * of our versions we informed them of.
         */
        VersionNotifyTargets: StorageDescriptor<Anonymize<Ic4qvh5df9s5gp>, Anonymize<I7vlvrrl2pnbgk>, true, never>;
        /**
         * Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
         * the `u32` counter is the number of times that a send to the destination has been attempted,
         * which is used as a prioritization.
         */
        VersionDiscoveryQueue: StorageDescriptor<[], Anonymize<I50sjs3s5lud21>, false, never>;
        /**
         * The current migration's stage, if any.
         */
        CurrentMigration: StorageDescriptor<[], XcmPalletVersionMigrationStage, true, never>;
        /**
         * Fungible assets which we know are locked on a remote chain.
         */
        RemoteLockedFungibles: StorageDescriptor<Anonymize<Iteuj23is2ed5>, Anonymize<I50qp0ij7h62g2>, true, never>;
        /**
         * Fungible assets which we know are locked on this chain.
         */
        LockedFungibles: StorageDescriptor<[Key: SS58String], Anonymize<I3rp19gb4dadaa>, true, never>;
        /**
         * Global suspension state of the XCM executor.
         */
        XcmExecutionSuspended: StorageDescriptor<[], boolean, false, never>;
        /**
         * Whether or not incoming XCMs (both executed locally and received) should be recorded.
         * Only one XCM program will be recorded at a time.
         * This is meant to be used in runtime APIs, and it's advised it stays false
         * for all other use cases, so as to not degrade regular performance.
         *
         * Only relevant if this pallet is being used as the [`xcm_executor::traits::RecordXcm`]
         * implementation in the XCM executor configuration.
         */
        ShouldRecordXcm: StorageDescriptor<[], boolean, false, never>;
        /**
         * If [`ShouldRecordXcm`] is set to true, then the last XCM program executed locally
         * will be stored here.
         * Runtime APIs can fetch the XCM that was executed by accessing this value.
         *
         * Only relevant if this pallet is being used as the [`xcm_executor::traits::RecordXcm`]
         * implementation in the XCM executor configuration.
         */
        RecordedXcm: StorageDescriptor<[], Anonymize<Iegrepoo0c1jc5>, true, never>;
    };
    MessageQueue: {
        /**
         * The index of the first and last (non-empty) pages.
         */
        BookStateFor: StorageDescriptor<[Key: Anonymize<Iejeo53sea6n4q>], Anonymize<Idh2ug6ou4a8og>, false, never>;
        /**
         * The origin at which we should begin servicing.
         */
        ServiceHead: StorageDescriptor<[], Anonymize<Iejeo53sea6n4q>, true, never>;
        /**
         * The map of page indices to pages.
         */
        Pages: StorageDescriptor<Anonymize<Ib4jhb8tt3uung>, Anonymize<I53esa2ms463bk>, true, never>;
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
        Spends: StorageDescriptor<[Key: number], Anonymize<I5eqns92ifde41>, true, never>;
    };
    Council: {
        /**
         * The hashes of the active proposals.
         */
        Proposals: StorageDescriptor<[], Anonymize<Ic5m5lp1oioo8r>, false, never>;
        /**
         * Actual proposal for a given hash, if it's current.
         */
        ProposalOf: StorageDescriptor<[Key: FixedSizeBinary<32>], Anonymize<Iairqoj9f5otv2>, true, never>;
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
    CouncilMembership: {
        /**
         * The current membership, stored as an ordered Vec.
         */
        Members: StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, false, never>;
        /**
         * The current prime member, if one exists.
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
        ProposalOf: StorageDescriptor<[Key: FixedSizeBinary<32>], Anonymize<Iairqoj9f5otv2>, true, never>;
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
    TechnicalCommitteeMembership: {
        /**
         * The current membership, stored as an ordered Vec.
         */
        Members: StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, false, never>;
        /**
         * The current prime member, if one exists.
         */
        Prime: StorageDescriptor<[], SS58String, true, never>;
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
    Randomness: {
        /**
         * Series of block headers from the last 81 blocks that acts as random seed material. This
         * is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
         * the oldest hash.
         */
        RandomMaterial: StorageDescriptor<[], Anonymize<Ic5m5lp1oioo8r>, false, never>;
    };
    AwesomeAvatars: {
        /**
        
         */
        Organizer: StorageDescriptor<[], SS58String, true, never>;
        /**
        
         */
        Treasurer: StorageDescriptor<[Key: number], SS58String, true, never>;
        /**
         * List of accounts allowed to transfer free mints.
         * A maximum of 3 different accounts can be on the list.
         */
        WhitelistedAccounts: StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, false, never>;
        /**
        
         */
        CurrentSeasonStatus: StorageDescriptor<[], Anonymize<Idhr6o5ts4074r>, false, never>;
        /**
         * Storage for the seasons.
         */
        Seasons: StorageDescriptor<[Key: number], Anonymize<I26oo18oer6pep>, true, never>;
        /**
         * Storage for the season's metadata.
         */
        SeasonMetas: StorageDescriptor<[Key: number], Anonymize<Idqvgv9ec5j9ok>, true, never>;
        /**
         * Storage for the season's schedules.
         */
        SeasonSchedules: StorageDescriptor<[Key: number], Anonymize<I11o1lb9439n82>, true, never>;
        /**
         * Storage for the season's trade filters.
         */
        SeasonTradeFilters: StorageDescriptor<[Key: number], Anonymize<Icgljjb6j82uhn>, true, never>;
        /**
         * Storage for the season's different unlock-ables.
         */
        SeasonUnlocks: StorageDescriptor<[Key: number], Anonymize<I2hud8khfpehps>, true, never>;
        /**
        
         */
        Treasury: StorageDescriptor<[Key: number], bigint, false, never>;
        /**
        
         */
        GlobalConfigs: StorageDescriptor<[], Anonymize<I9b040l6qe31ee>, false, never>;
        /**
        
         */
        Avatars: StorageDescriptor<[Key: FixedSizeBinary<32>], Anonymize<I6ogi6ainomnvo>, true, never>;
        /**
        
         */
        Owners: StorageDescriptor<Anonymize<I6ouflveob4eli>, Anonymize<Ic5m5lp1oioo8r>, false, never>;
        /**
        
         */
        LockedAvatars: StorageDescriptor<[Key: FixedSizeBinary<32>], undefined, true, never>;
        /**
        
         */
        CollectionId: StorageDescriptor<[], number, true, never>;
        /**
        
         */
        PlayerConfigs: StorageDescriptor<[Key: SS58String], number, false, never>;
        /**
        
         */
        PlayerSeasonConfigs: StorageDescriptor<Anonymize<I6ouflveob4eli>, Anonymize<I9fma2nubf2fu3>, false, never>;
        /**
         * This is only an intermediate storage that is being used during the multiblock runtime
         * migration of v5 to v6. It should be removed afterward.
         */
        TradeStatsMap: StorageDescriptor<Anonymize<I7svnfko10tq2e>, Anonymize<I9jd27rnpm8ttv>, true, never>;
        /**
        
         */
        SeasonStats: StorageDescriptor<Anonymize<I7svnfko10tq2e>, Anonymize<I4gclh7rtr1eim>, false, never>;
        /**
        
         */
        Trade: StorageDescriptor<Anonymize<I4p5t2krb1gmvp>, bigint, true, never>;
        /**
        
         */
        ServiceAccount: StorageDescriptor<[], SS58String, true, never>;
        /**
        
         */
        Preparation: StorageDescriptor<[Key: FixedSizeBinary<32>], Binary, true, never>;
        /**
        
         */
        TournamentRankers: StorageDescriptor<Anonymize<I5g2vv0ckl2m8b>, Anonymize<Ia2jsoe9nnvpnn>, true, never>;
    };
    Nft: {
        /**
         * Details of a collection.
         */
        Collection: StorageDescriptor<[Key: number], Anonymize<I18m6a0sc4k7s9>, true, never>;
        /**
         * The collection, if any, of which an account is willing to take ownership.
         */
        OwnershipAcceptance: StorageDescriptor<[Key: SS58String], number, true, never>;
        /**
         * The items held by any given account; set out this way so that items owned by a single
         * account can be enumerated.
         */
        Account: StorageDescriptor<Anonymize<Ijsohbv0raf36>, undefined, true, never>;
        /**
         * The collections owned by any given account; set out this way so that collections owned by
         * a single account can be enumerated.
         */
        CollectionAccount: StorageDescriptor<Anonymize<I6ouflveob4eli>, undefined, true, never>;
        /**
         * The items in existence and their ownership details.
         * Stores collection roles as per account.
         */
        CollectionRoleOf: StorageDescriptor<Anonymize<I7svnfko10tq2e>, number, true, never>;
        /**
         * The items in existence and their ownership details.
         */
        Item: StorageDescriptor<Anonymize<I4p5t2krb1gmvp>, Anonymize<Ic9iokm15iigt6>, true, never>;
        /**
         * Metadata of a collection.
         */
        CollectionMetadataOf: StorageDescriptor<[Key: number], Anonymize<I35m96p3u4vl0p>, true, never>;
        /**
         * Metadata of an item.
         */
        ItemMetadataOf: StorageDescriptor<Anonymize<I4p5t2krb1gmvp>, Anonymize<Iapmji0h53pmkn>, true, never>;
        /**
         * Attributes of a collection.
         */
        Attribute: StorageDescriptor<Anonymize<I97h4sois29k7l>, Anonymize<Idrr42svup341f>, true, never>;
        /**
         * A price of an item.
         */
        ItemPriceOf: StorageDescriptor<Anonymize<I4p5t2krb1gmvp>, Anonymize<Ic9nev69d8grv1>, true, never>;
        /**
         * Item attribute approvals.
         */
        ItemAttributesApprovalsOf: StorageDescriptor<Anonymize<I4p5t2krb1gmvp>, Anonymize<Ia2lhg7l2hilo3>, false, never>;
        /**
         * Stores the `CollectionId` that is going to be used for the next collection.
         * This gets incremented whenever a new collection is created.
         */
        NextCollectionId: StorageDescriptor<[], number, true, never>;
        /**
         * Handles all the pending swaps.
         */
        PendingSwapOf: StorageDescriptor<Anonymize<I4p5t2krb1gmvp>, Anonymize<Ic8pvmb07ungco>, true, never>;
        /**
         * Config of a collection.
         */
        CollectionConfigOf: StorageDescriptor<[Key: number], Anonymize<I72ndo6phms8ik>, true, never>;
        /**
         * Config of an item.
         */
        ItemConfigOf: StorageDescriptor<Anonymize<I4p5t2krb1gmvp>, bigint, true, never>;
    };
    NftTransfer: {
        /**
        
         */
        NftStatuses: StorageDescriptor<Anonymize<I4p5t2krb1gmvp>, Anonymize<Inrpaqi4t8st7>, true, never>;
    };
    AffiliatesAAA: {
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
        AffiliateRules: StorageDescriptor<[Key: Anonymize<I9ce37qd80jf23>], Binary, true, never>;
        /**
        
         */
        NextAffiliateId: StorageDescriptor<[], number, false, never>;
        /**
        
         */
        AffiliateIdMapping: StorageDescriptor<[Key: number], SS58String, true, never>;
    };
    TournamentAAA: {
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
        TournamentRankings: StorageDescriptor<Anonymize<I5g2vv0ckl2m8b>, Anonymize<Idrm6gruadkcn8>, false, never>;
        /**
        
         */
        TournamentRewardClaims: StorageDescriptor<Anonymize<Icj2nb69liuu24>, Anonymize<I6f3f327e3k6hl>, true, never>;
        /**
        
         */
        GoldenDucks: StorageDescriptor<Anonymize<I5g2vv0ckl2m8b>, Anonymize<Idelpe7fpd43p4>, false, never>;
        /**
        
         */
        GoldenDuckRewardClaims: StorageDescriptor<Anonymize<I5g2vv0ckl2m8b>, Anonymize<I6f3f327e3k6hl>, true, never>;
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
    AssetRegistry: {
        /**
        
         */
        AssetIdLocation: StorageDescriptor<[Key: number], Anonymize<I4c0s5cioidn76>, true, never>;
        /**
        
         */
        AssetLocationId: StorageDescriptor<[Key: Anonymize<I4c0s5cioidn76>], number, true, never>;
    };
    PoolAssets: {
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
    AssetConversion: {
        /**
         * Map from `PoolAssetId` to `PoolInfo`. This establishes whether a pool has been officially
         * created rather than people sending tokens directly to a pool's public account.
         */
        Pools: StorageDescriptor<[Key: Anonymize<I4lgr5i5qhk4i8>], number, true, never>;
        /**
         * Stores the `PoolAssetId` that is going to be used for the next lp token.
         * This gets incremented whenever a new lp pool is created.
         */
        NextPoolAssetId: StorageDescriptor<[], number, true, never>;
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
    ParachainSystem: {
        /**
         *Set the current validation data.
         *
         *This should be invoked exactly once per block. It will panic at the finalization
         *phase if the call was not invoked.
         *
         *The dispatch origin for this call must be `Inherent`
         *
         *As a side effect, this function upgrades the current validation function
         *if the appropriate time has come.
         */
        set_validation_data: TxDescriptor<Anonymize<I60v7bikk54tpu>>;
        /**
        
         */
        sudo_send_upward_message: TxDescriptor<Anonymize<Ifpj261e8s63m3>>;
        /**
         *Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
         *later.
         *
         *The `check_version` parameter sets a boolean flag for whether or not the runtime's spec
         *version and name should be verified on upgrade. Since the authorization only has a hash,
         *it cannot actually perform the verification.
         *
         *This call requires Root origin.
         */
        authorize_upgrade: TxDescriptor<Anonymize<Ibgl04rn6nbfm6>>;
        /**
         *Provide the preimage (runtime binary) `code` for an upgrade that has been authorized.
         *
         *If the authorization required a version check, this call will ensure the spec name
         *remains unchanged and that the spec version has increased.
         *
         *Note that this function will not apply the new `code`, but only attempt to schedule the
         *upgrade with the Relay Chain.
         *
         *All origins are allowed.
         */
        enact_authorized_upgrade: TxDescriptor<Anonymize<I6pjjpfvhvcfru>>;
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
        as_multi_threshold_1: TxDescriptor<Anonymize<Ifue4to3kf5jlm>>;
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
        as_multi: TxDescriptor<Anonymize<Ia4jql133lmqca>>;
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
        batch: TxDescriptor<Anonymize<I653pgl2urcbb1>>;
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
        as_derivative: TxDescriptor<Anonymize<If4t46h5lmq7ar>>;
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
        batch_all: TxDescriptor<Anonymize<I653pgl2urcbb1>>;
        /**
         *Dispatches a function call with a provided origin.
         *
         *The dispatch origin for this call must be _Root_.
         *
         *## Complexity
         *- O(1).
         */
        dispatch_as: TxDescriptor<Anonymize<I719rjdp5m0tgc>>;
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
        force_batch: TxDescriptor<Anonymize<I653pgl2urcbb1>>;
        /**
         *Dispatch a function call with a specified weight.
         *
         *This function does not check the weight of the call, and instead allows the
         *Root origin to specify the weight of the call.
         *
         *The dispatch origin for this call must be _Root_.
         */
        with_weight: TxDescriptor<Anonymize<I21grdkdd0j5lm>>;
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
         *Self::registrars().get(reg_index).unwrap().fee
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
        proxy: TxDescriptor<Anonymize<I8qcttesohqpgs>>;
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
        add_proxy: TxDescriptor<Anonymize<Id1sldaur13m9c>>;
        /**
         *Unregister a proxy account for the sender.
         *
         *The dispatch origin for this call must be _Signed_.
         *
         *Parameters:
         *- `proxy`: The account that the `caller` would like to remove as a proxy.
         *- `proxy_type`: The permissions currently enabled for the removed proxy account.
         */
        remove_proxy: TxDescriptor<Anonymize<Id1sldaur13m9c>>;
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
        create_pure: TxDescriptor<Anonymize<Ie4ebalp1vm5ac>>;
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
        kill_pure: TxDescriptor<Anonymize<I1m55mnvh4e9st>>;
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
        proxy_announced: TxDescriptor<Anonymize<I1ei6c5pacfuk4>>;
    };
    Scheduler: {
        /**
         *Anonymously schedule a task.
         */
        schedule: TxDescriptor<Anonymize<I495f65dh4lrue>>;
        /**
         *Cancel an anonymously scheduled task.
         */
        cancel: TxDescriptor<Anonymize<I5n4sebgkfr760>>;
        /**
         *Schedule a named task.
         */
        schedule_named: TxDescriptor<Anonymize<I7j2hf7psrqgav>>;
        /**
         *Cancel a named scheduled task.
         */
        cancel_named: TxDescriptor<Anonymize<Ifs1i5fk9cqvr6>>;
        /**
         *Anonymously schedule a task after a delay.
         */
        schedule_after: TxDescriptor<Anonymize<I6rg05qo9icr1k>>;
        /**
         *Schedule a named task after a delay.
         */
        schedule_named_after: TxDescriptor<Anonymize<Iftj3umjp2i9v>>;
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
    CollatorSelection: {
        /**
         *Set the list of invulnerable (fixed) collators. These collators must do some
         *preparation, namely to have registered session keys.
         *
         *The call will remove any accounts that have not registered keys from the set. That is,
         *it is non-atomic; the caller accepts all `AccountId`s passed in `new` _individually_ as
         *acceptable Invulnerables, and is not proposing a _set_ of new Invulnerables.
         *
         *This call does not maintain mutual exclusivity of `Invulnerables` and `Candidates`. It
         *is recommended to use a batch of `add_invulnerable` and `remove_invulnerable` instead. A
         *`batch_all` can also be used to enforce atomicity. If any candidates are included in
         *`new`, they should be removed with `remove_invulnerable_candidate` after execution.
         *
         *Must be called by the `UpdateOrigin`.
         */
        set_invulnerables: TxDescriptor<Anonymize<Ifccifqltb5obi>>;
        /**
         *Set the ideal number of non-invulnerable collators. If lowering this number, then the
         *number of running collators could be higher than this figure. Aside from that edge case,
         *there should be no other way to have more candidates than the desired number.
         *
         *The origin for this call must be the `UpdateOrigin`.
         */
        set_desired_candidates: TxDescriptor<Anonymize<Iadtsfv699cq8b>>;
        /**
         *Set the candidacy bond amount.
         *
         *If the candidacy bond is increased by this call, all current candidates which have a
         *deposit lower than the new bond will be kicked from the list and get their deposits
         *back.
         *
         *The origin for this call must be the `UpdateOrigin`.
         */
        set_candidacy_bond: TxDescriptor<Anonymize<Ialpmgmhr3gk5r>>;
        /**
         *Register this account as a collator candidate. The account must (a) already have
         *registered session keys and (b) be able to reserve the `CandidacyBond`.
         *
         *This call is not available to `Invulnerable` collators.
         */
        register_as_candidate: TxDescriptor<undefined>;
        /**
         *Deregister `origin` as a collator candidate. Note that the collator can only leave on
         *session change. The `CandidacyBond` will be unreserved immediately.
         *
         *This call will fail if the total number of candidates would drop below
         *`MinEligibleCollators`.
         */
        leave_intent: TxDescriptor<undefined>;
        /**
         *Add a new account `who` to the list of `Invulnerables` collators. `who` must have
         *registered session keys. If `who` is a candidate, they will be removed.
         *
         *The origin for this call must be the `UpdateOrigin`.
         */
        add_invulnerable: TxDescriptor<Anonymize<I4cbvqmqadhrea>>;
        /**
         *Remove an account `who` from the list of `Invulnerables` collators. `Invulnerables` must
         *be sorted.
         *
         *The origin for this call must be the `UpdateOrigin`.
         */
        remove_invulnerable: TxDescriptor<Anonymize<I4cbvqmqadhrea>>;
        /**
         *Update the candidacy bond of collator candidate `origin` to a new amount `new_deposit`.
         *
         *Setting a `new_deposit` that is lower than the current deposit while `origin` is
         *occupying a top-`DesiredCandidates` slot is not allowed.
         *
         *This call will fail if `origin` is not a collator candidate, the updated bond is lower
         *than the minimum candidacy bond, and/or the amount cannot be reserved.
         */
        update_bond: TxDescriptor<Anonymize<I3sdol54kg5jaq>>;
        /**
         *The caller `origin` replaces a candidate `target` in the collator candidate list by
         *reserving `deposit`. The amount `deposit` reserved by the caller must be greater than
         *the existing bond of the target it is trying to replace.
         *
         *This call will fail if the caller is already a collator candidate or invulnerable, the
         *caller does not have registered session keys, the target is not a collator candidate,
         *and/or the `deposit` amount cannot be reserved.
         */
        take_candidate_slot: TxDescriptor<Anonymize<I8fougodaj6di6>>;
    };
    Session: {
        /**
         *Sets the session key(s) of the function caller to `keys`.
         *Allows an account to set its session key prior to becoming a validator.
         *This doesn't take effect until the next session.
         *
         *The dispatch origin of this function must be signed.
         *
         *## Complexity
         *- `O(1)`. Actual cost depends on the number of length of `T::Keys::key_ids()` which is
         *  fixed.
         */
        set_keys: TxDescriptor<Anonymize<I81vt5eq60l4b6>>;
        /**
         *Removes any session key(s) of the function caller.
         *
         *This doesn't take effect until the next session.
         *
         *The dispatch origin of this function must be Signed and the account must be either be
         *convertible to a validator ID using the chain's typical addressing system (this usually
         *means being a controller account) or directly convertible into a validator ID (which
         *usually means being a stash account).
         *
         *## Complexity
         *- `O(1)` in number of key types. Actual cost depends on the number of length of
         *  `T::Keys::key_ids()` which is fixed.
         */
        purge_keys: TxDescriptor<undefined>;
    };
    XcmpQueue: {
        /**
         *Suspends all XCM executions for the XCMP queue, regardless of the sender's origin.
         *
         *- `origin`: Must pass `ControllerOrigin`.
         */
        suspend_xcm_execution: TxDescriptor<undefined>;
        /**
         *Resumes all XCM executions for the XCMP queue.
         *
         *Note that this function doesn't change the status of the in/out bound channels.
         *
         *- `origin`: Must pass `ControllerOrigin`.
         */
        resume_xcm_execution: TxDescriptor<undefined>;
        /**
         *Overwrites the number of pages which must be in the queue for the other side to be
         *told to suspend their sending.
         *
         *- `origin`: Must pass `Root`.
         *- `new`: Desired value for `QueueConfigData.suspend_value`
         */
        update_suspend_threshold: TxDescriptor<Anonymize<I3vh014cqgmrfd>>;
        /**
         *Overwrites the number of pages which must be in the queue after which we drop any
         *further messages from the channel.
         *
         *- `origin`: Must pass `Root`.
         *- `new`: Desired value for `QueueConfigData.drop_threshold`
         */
        update_drop_threshold: TxDescriptor<Anonymize<I3vh014cqgmrfd>>;
        /**
         *Overwrites the number of pages which the queue must be reduced to before it signals
         *that message sending may recommence after it has been suspended.
         *
         *- `origin`: Must pass `Root`.
         *- `new`: Desired value for `QueueConfigData.resume_threshold`
         */
        update_resume_threshold: TxDescriptor<Anonymize<I3vh014cqgmrfd>>;
    };
    PolkadotXcm: {
        /**
        
         */
        send: TxDescriptor<Anonymize<I9paqujeb1fpv6>>;
        /**
         *Teleport some assets from the local chain to some destination chain.
         *
         ***This function is deprecated: Use `limited_teleport_assets` instead.**
         *
         *Fee payment on the destination side is made from the asset in the `assets` vector of
         *index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
         *with all fees taken as needed from the asset.
         *
         *- `origin`: Must be capable of withdrawing the `assets` and executing XCM.
         *- `dest`: Destination context for the assets. Will typically be `[Parent,
         *  Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
         *  relay to parachain.
         *- `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
         *  generally be an `AccountId32` value.
         *- `assets`: The assets to be withdrawn. This should include the assets used to pay the
         *  fee on the `dest` chain.
         *- `fee_asset_item`: The index into `assets` of the item which should be used to pay
         *  fees.
         */
        teleport_assets: TxDescriptor<Anonymize<Iakevv83i18n4r>>;
        /**
         *Transfer some assets from the local chain to the destination chain through their local,
         *destination or remote reserve.
         *
         *`assets` must have same reserve location and may not be teleportable to `dest`.
         * - `assets` have local reserve: transfer assets to sovereign account of destination
         *   chain and forward a notification XCM to `dest` to mint and deposit reserve-based
         *   assets to `beneficiary`.
         * - `assets` have destination reserve: burn local assets and forward a notification to
         *   `dest` chain to withdraw the reserve assets from this chain's sovereign account and
         *   deposit them to `beneficiary`.
         * - `assets` have remote reserve: burn local assets, forward XCM to reserve chain to move
         *   reserves from this chain's SA to `dest` chain's SA, and forward another XCM to `dest`
         *   to mint and deposit reserve-based assets to `beneficiary`.
         *
         ***This function is deprecated: Use `limited_reserve_transfer_assets` instead.**
         *
         *Fee payment on the destination side is made from the asset in the `assets` vector of
         *index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
         *with all fees taken as needed from the asset.
         *
         *- `origin`: Must be capable of withdrawing the `assets` and executing XCM.
         *- `dest`: Destination context for the assets. Will typically be `[Parent,
         *  Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
         *  relay to parachain.
         *- `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
         *  generally be an `AccountId32` value.
         *- `assets`: The assets to be withdrawn. This should include the assets used to pay the
         *  fee on the `dest` (and possibly reserve) chains.
         *- `fee_asset_item`: The index into `assets` of the item which should be used to pay
         *  fees.
         */
        reserve_transfer_assets: TxDescriptor<Anonymize<Iakevv83i18n4r>>;
        /**
         *Execute an XCM message from a local, signed, origin.
         *
         *An event is deposited indicating whether `msg` could be executed completely or only
         *partially.
         *
         *No more than `max_weight` will be used in its attempted execution. If this is less than
         *the maximum amount of weight that the message could take to be executed, then no
         *execution attempt will be made.
         */
        execute: TxDescriptor<Anonymize<If2ssl12kcglhg>>;
        /**
         *Extoll that a particular destination can be communicated with through a particular
         *version of XCM.
         *
         *- `origin`: Must be an origin specified by AdminOrigin.
         *- `location`: The destination that is being described.
         *- `xcm_version`: The latest version of XCM that `location` supports.
         */
        force_xcm_version: TxDescriptor<Anonymize<Iabk8ljl5g8c86>>;
        /**
         *Set a safe XCM version (the version that XCM should be encoded with if the most recent
         *version a destination can accept is unknown).
         *
         *- `origin`: Must be an origin specified by AdminOrigin.
         *- `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
         */
        force_default_xcm_version: TxDescriptor<Anonymize<Ic76kfh5ebqkpl>>;
        /**
         *Ask a location to notify us regarding their XCM version and any changes to it.
         *
         *- `origin`: Must be an origin specified by AdminOrigin.
         *- `location`: The location to which we should subscribe for XCM version notifications.
         */
        force_subscribe_version_notify: TxDescriptor<Anonymize<Icrujen33bbibf>>;
        /**
         *Require that a particular destination should no longer notify us regarding any XCM
         *version changes.
         *
         *- `origin`: Must be an origin specified by AdminOrigin.
         *- `location`: The location to which we are currently subscribed for XCM version
         *  notifications which we no longer desire.
         */
        force_unsubscribe_version_notify: TxDescriptor<Anonymize<Icrujen33bbibf>>;
        /**
         *Transfer some assets from the local chain to the destination chain through their local,
         *destination or remote reserve.
         *
         *`assets` must have same reserve location and may not be teleportable to `dest`.
         * - `assets` have local reserve: transfer assets to sovereign account of destination
         *   chain and forward a notification XCM to `dest` to mint and deposit reserve-based
         *   assets to `beneficiary`.
         * - `assets` have destination reserve: burn local assets and forward a notification to
         *   `dest` chain to withdraw the reserve assets from this chain's sovereign account and
         *   deposit them to `beneficiary`.
         * - `assets` have remote reserve: burn local assets, forward XCM to reserve chain to move
         *   reserves from this chain's SA to `dest` chain's SA, and forward another XCM to `dest`
         *   to mint and deposit reserve-based assets to `beneficiary`.
         *
         *Fee payment on the destination side is made from the asset in the `assets` vector of
         *index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
         *is needed than `weight_limit`, then the operation will fail and the sent assets may be
         *at risk.
         *
         *- `origin`: Must be capable of withdrawing the `assets` and executing XCM.
         *- `dest`: Destination context for the assets. Will typically be `[Parent,
         *  Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
         *  relay to parachain.
         *- `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
         *  generally be an `AccountId32` value.
         *- `assets`: The assets to be withdrawn. This should include the assets used to pay the
         *  fee on the `dest` (and possibly reserve) chains.
         *- `fee_asset_item`: The index into `assets` of the item which should be used to pay
         *  fees.
         *- `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
         */
        limited_reserve_transfer_assets: TxDescriptor<Anonymize<I5gi8h3e5lkbeq>>;
        /**
         *Teleport some assets from the local chain to some destination chain.
         *
         *Fee payment on the destination side is made from the asset in the `assets` vector of
         *index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
         *is needed than `weight_limit`, then the operation will fail and the sent assets may be
         *at risk.
         *
         *- `origin`: Must be capable of withdrawing the `assets` and executing XCM.
         *- `dest`: Destination context for the assets. Will typically be `[Parent,
         *  Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
         *  relay to parachain.
         *- `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
         *  generally be an `AccountId32` value.
         *- `assets`: The assets to be withdrawn. This should include the assets used to pay the
         *  fee on the `dest` chain.
         *- `fee_asset_item`: The index into `assets` of the item which should be used to pay
         *  fees.
         *- `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
         */
        limited_teleport_assets: TxDescriptor<Anonymize<I5gi8h3e5lkbeq>>;
        /**
         *Set or unset the global suspension state of the XCM executor.
         *
         *- `origin`: Must be an origin specified by AdminOrigin.
         *- `suspended`: `true` to suspend, `false` to resume.
         */
        force_suspension: TxDescriptor<Anonymize<Ibgm4rnf22lal1>>;
        /**
         *Transfer some assets from the local chain to the destination chain through their local,
         *destination or remote reserve, or through teleports.
         *
         *Fee payment on the destination side is made from the asset in the `assets` vector of
         *index `fee_asset_item` (hence referred to as `fees`), up to enough to pay for
         *`weight_limit` of weight. If more weight is needed than `weight_limit`, then the
         *operation will fail and the sent assets may be at risk.
         *
         *`assets` (excluding `fees`) must have same reserve location or otherwise be teleportable
         *to `dest`, no limitations imposed on `fees`.
         * - for local reserve: transfer assets to sovereign account of destination chain and
         *   forward a notification XCM to `dest` to mint and deposit reserve-based assets to
         *   `beneficiary`.
         * - for destination reserve: burn local assets and forward a notification to `dest` chain
         *   to withdraw the reserve assets from this chain's sovereign account and deposit them
         *   to `beneficiary`.
         * - for remote reserve: burn local assets, forward XCM to reserve chain to move reserves
         *   from this chain's SA to `dest` chain's SA, and forward another XCM to `dest` to mint
         *   and deposit reserve-based assets to `beneficiary`.
         * - for teleports: burn local assets and forward XCM to `dest` chain to mint/teleport
         *   assets and deposit them to `beneficiary`.
         *
         *- `origin`: Must be capable of withdrawing the `assets` and executing XCM.
         *- `dest`: Destination context for the assets. Will typically be `X2(Parent,
         *  Parachain(..))` to send from parachain to parachain, or `X1(Parachain(..))` to send
         *  from relay to parachain.
         *- `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
         *  generally be an `AccountId32` value.
         *- `assets`: The assets to be withdrawn. This should include the assets used to pay the
         *  fee on the `dest` (and possibly reserve) chains.
         *- `fee_asset_item`: The index into `assets` of the item which should be used to pay
         *  fees.
         *- `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
         */
        transfer_assets: TxDescriptor<Anonymize<I5gi8h3e5lkbeq>>;
        /**
         *Claims assets trapped on this pallet because of leftover assets during XCM execution.
         *
         *- `origin`: Anyone can call this extrinsic.
         *- `assets`: The exact assets that were trapped. Use the version to specify what version
         *was the latest when they were trapped.
         *- `beneficiary`: The location/account where the claimed assets will be deposited.
         */
        claim_assets: TxDescriptor<Anonymize<I8mmaab8je28oo>>;
        /**
         *Transfer assets from the local chain to the destination chain using explicit transfer
         *types for assets and fees.
         *
         *`assets` must have same reserve location or may be teleportable to `dest`. Caller must
         *provide the `assets_transfer_type` to be used for `assets`:
         * - `TransferType::LocalReserve`: transfer assets to sovereign account of destination
         *   chain and forward a notification XCM to `dest` to mint and deposit reserve-based
         *   assets to `beneficiary`.
         * - `TransferType::DestinationReserve`: burn local assets and forward a notification to
         *   `dest` chain to withdraw the reserve assets from this chain's sovereign account and
         *   deposit them to `beneficiary`.
         * - `TransferType::RemoteReserve(reserve)`: burn local assets, forward XCM to `reserve`
         *   chain to move reserves from this chain's SA to `dest` chain's SA, and forward another
         *   XCM to `dest` to mint and deposit reserve-based assets to `beneficiary`. Typically
         *   the remote `reserve` is Asset Hub.
         * - `TransferType::Teleport`: burn local assets and forward XCM to `dest` chain to
         *   mint/teleport assets and deposit them to `beneficiary`.
         *
         *On the destination chain, as well as any intermediary hops, `BuyExecution` is used to
         *buy execution using transferred `assets` identified by `remote_fees_id`.
         *Make sure enough of the specified `remote_fees_id` asset is included in the given list
         *of `assets`. `remote_fees_id` should be enough to pay for `weight_limit`. If more weight
         *is needed than `weight_limit`, then the operation will fail and the sent assets may be
         *at risk.
         *
         *`remote_fees_id` may use different transfer type than rest of `assets` and can be
         *specified through `fees_transfer_type`.
         *
         *The caller needs to specify what should happen to the transferred assets once they reach
         *the `dest` chain. This is done through the `custom_xcm_on_dest` parameter, which
         *contains the instructions to execute on `dest` as a final step.
         *  This is usually as simple as:
         *  `Xcm(vec![DepositAsset { assets: Wild(AllCounted(assets.len())), beneficiary }])`,
         *  but could be something more exotic like sending the `assets` even further.
         *
         *- `origin`: Must be capable of withdrawing the `assets` and executing XCM.
         *- `dest`: Destination context for the assets. Will typically be `[Parent,
         *  Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
         *  relay to parachain, or `(parents: 2, (GlobalConsensus(..), ..))` to send from
         *  parachain across a bridge to another ecosystem destination.
         *- `assets`: The assets to be withdrawn. This should include the assets used to pay the
         *  fee on the `dest` (and possibly reserve) chains.
         *- `assets_transfer_type`: The XCM `TransferType` used to transfer the `assets`.
         *- `remote_fees_id`: One of the included `assets` to be used to pay fees.
         *- `fees_transfer_type`: The XCM `TransferType` used to transfer the `fees` assets.
         *- `custom_xcm_on_dest`: The XCM to be executed on `dest` chain as the last step of the
         *  transfer, which also determines what happens to the assets on the destination chain.
         *- `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
         */
        transfer_assets_using_type_and_then: TxDescriptor<Anonymize<I6r0pr82pbiftt>>;
    };
    MessageQueue: {
        /**
         *Remove a page which has no more messages remaining to be processed or is stale.
         */
        reap_page: TxDescriptor<Anonymize<I40pqum1mu8qg3>>;
        /**
         *Execute an overweight message.
         *
         *Temporary processing errors will be propagated whereas permanent errors are treated
         *as success condition.
         *
         *- `origin`: Must be `Signed`.
         *- `message_origin`: The origin from which the message to be executed arrived.
         *- `page`: The page in the queue in which the message to be executed is sitting.
         *- `index`: The index into the queue of the message to be executed.
         *- `weight_limit`: The maximum amount of weight allowed to be consumed in the execution
         *  of the message.
         *
         *Benchmark complexity considerations: O(index + weight_limit).
         */
        execute_overweight: TxDescriptor<Anonymize<I1r4c2ghbtvjuc>>;
    };
    XTokens: {
        /**
         *Transfer native currencies.
         *
         *`dest_weight_limit` is the weight for XCM execution on the dest
         *chain, and it would be charged from the transferred assets. If set
         *below requirements, the execution may fail and assets wouldn't be
         *received.
         *
         *It's a no-op if any error on local XCM execution or message sending.
         *Note sending assets out per se doesn't guarantee they would be
         *received. Receiving depends on if the XCM message could be delivered
         *by the network, and if the receiving chain would handle
         *messages correctly.
         */
        transfer: TxDescriptor<Anonymize<I6fm0bjjf17uj6>>;
        /**
         *Transfer `Asset`.
         *
         *`dest_weight_limit` is the weight for XCM execution on the dest
         *chain, and it would be charged from the transferred assets. If set
         *below requirements, the execution may fail and assets wouldn't be
         *received.
         *
         *It's a no-op if any error on local XCM execution or message sending.
         *Note sending assets out per se doesn't guarantee they would be
         *received. Receiving depends on if the XCM message could be delivered
         *by the network, and if the receiving chain would handle
         *messages correctly.
         */
        transfer_multiasset: TxDescriptor<Anonymize<Idu1ujel33jksu>>;
        /**
         *Transfer native currencies specifying the fee and amount as
         *separate.
         *
         *`dest_weight_limit` is the weight for XCM execution on the dest
         *chain, and it would be charged from the transferred assets. If set
         *below requirements, the execution may fail and assets wouldn't be
         *received.
         *
         *`fee` is the amount to be spent to pay for execution in destination
         *chain. Both fee and amount will be subtracted form the callers
         *balance.
         *
         *If `fee` is not high enough to cover for the execution costs in the
         *destination chain, then the assets will be trapped in the
         *destination chain
         *
         *It's a no-op if any error on local XCM execution or message sending.
         *Note sending assets out per se doesn't guarantee they would be
         *received. Receiving depends on if the XCM message could be delivered
         *by the network, and if the receiving chain would handle
         *messages correctly.
         */
        transfer_with_fee: TxDescriptor<Anonymize<I25din0e2p6hc9>>;
        /**
         *Transfer `Asset` specifying the fee and amount as separate.
         *
         *`dest_weight_limit` is the weight for XCM execution on the dest
         *chain, and it would be charged from the transferred assets. If set
         *below requirements, the execution may fail and assets wouldn't be
         *received.
         *
         *`fee` is the Asset to be spent to pay for execution in
         *destination chain. Both fee and amount will be subtracted form the
         *callers balance For now we only accept fee and asset having the same
         *`Location` id.
         *
         *If `fee` is not high enough to cover for the execution costs in the
         *destination chain, then the assets will be trapped in the
         *destination chain
         *
         *It's a no-op if any error on local XCM execution or message sending.
         *Note sending assets out per se doesn't guarantee they would be
         *received. Receiving depends on if the XCM message could be delivered
         *by the network, and if the receiving chain would handle
         *messages correctly.
         */
        transfer_multiasset_with_fee: TxDescriptor<Anonymize<I40fog3d0qlub1>>;
        /**
         *Transfer several currencies specifying the item to be used as fee
         *
         *`dest_weight_limit` is the weight for XCM execution on the dest
         *chain, and it would be charged from the transferred assets. If set
         *below requirements, the execution may fail and assets wouldn't be
         *received.
         *
         *`fee_item` is index of the currencies tuple that we want to use for
         *payment
         *
         *It's a no-op if any error on local XCM execution or message sending.
         *Note sending assets out per se doesn't guarantee they would be
         *received. Receiving depends on if the XCM message could be delivered
         *by the network, and if the receiving chain would handle
         *messages correctly.
         */
        transfer_multicurrencies: TxDescriptor<Anonymize<I9l97u5776hdev>>;
        /**
         *Transfer several `Asset` specifying the item to be used as fee
         *
         *`dest_weight_limit` is the weight for XCM execution on the dest
         *chain, and it would be charged from the transferred assets. If set
         *below requirements, the execution may fail and assets wouldn't be
         *received.
         *
         *`fee_item` is index of the Assets that we want to use for
         *payment
         *
         *It's a no-op if any error on local XCM execution or message sending.
         *Note sending assets out per se doesn't guarantee they would be
         *received. Receiving depends on if the XCM message could be delivered
         *by the network, and if the receiving chain would handle
         *messages correctly.
         */
        transfer_multiassets: TxDescriptor<Anonymize<Iaif2nhfhk9qc0>>;
    };
    OrmlXcm: {
        /**
         *Send an XCM message as parachain sovereign.
         */
        send_as_sovereign: TxDescriptor<Anonymize<I9paqujeb1fpv6>>;
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
        spend: TxDescriptor<Anonymize<I85tgdb4326e4k>>;
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
        execute: TxDescriptor<Anonymize<I14gl5ef7g3dei>>;
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
        propose: TxDescriptor<Anonymize<Ifqn21l5phglgj>>;
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
    CouncilMembership: {
        /**
         *Add a member `who` to the set.
         *
         *May only be called from `T::AddOrigin`.
         */
        add_member: TxDescriptor<Anonymize<I59bngqm85b22v>>;
        /**
         *Remove a member `who` from the set.
         *
         *May only be called from `T::RemoveOrigin`.
         */
        remove_member: TxDescriptor<Anonymize<I59bngqm85b22v>>;
        /**
         *Swap out one member `remove` for another `add`.
         *
         *May only be called from `T::SwapOrigin`.
         *
         *Prime membership is *not* passed from `remove` to `add`, if extant.
         */
        swap_member: TxDescriptor<Anonymize<I4u4n2na1l5uo7>>;
        /**
         *Change the membership to a new set, disregarding the existing membership. Be nice and
         *pass `members` pre-sorted.
         *
         *May only be called from `T::ResetOrigin`.
         */
        reset_members: TxDescriptor<Anonymize<I3c63j6sh3evqn>>;
        /**
         *Swap out the sending member for some other key `new`.
         *
         *May only be called from `Signed` origin of a current member.
         *
         *Prime membership is passed from the origin account to `new`, if extant.
         */
        change_key: TxDescriptor<Anonymize<I8k3rnvpeeh4hv>>;
        /**
         *Set the prime member. Must be a current member.
         *
         *May only be called from `T::PrimeOrigin`.
         */
        set_prime: TxDescriptor<Anonymize<I59bngqm85b22v>>;
        /**
         *Remove the prime member if it exists.
         *
         *May only be called from `T::PrimeOrigin`.
         */
        clear_prime: TxDescriptor<undefined>;
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
        execute: TxDescriptor<Anonymize<I14gl5ef7g3dei>>;
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
        propose: TxDescriptor<Anonymize<Ifqn21l5phglgj>>;
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
    TechnicalCommitteeMembership: {
        /**
         *Add a member `who` to the set.
         *
         *May only be called from `T::AddOrigin`.
         */
        add_member: TxDescriptor<Anonymize<I59bngqm85b22v>>;
        /**
         *Remove a member `who` from the set.
         *
         *May only be called from `T::RemoveOrigin`.
         */
        remove_member: TxDescriptor<Anonymize<I59bngqm85b22v>>;
        /**
         *Swap out one member `remove` for another `add`.
         *
         *May only be called from `T::SwapOrigin`.
         *
         *Prime membership is *not* passed from `remove` to `add`, if extant.
         */
        swap_member: TxDescriptor<Anonymize<I4u4n2na1l5uo7>>;
        /**
         *Change the membership to a new set, disregarding the existing membership. Be nice and
         *pass `members` pre-sorted.
         *
         *May only be called from `T::ResetOrigin`.
         */
        reset_members: TxDescriptor<Anonymize<I3c63j6sh3evqn>>;
        /**
         *Swap out the sending member for some other key `new`.
         *
         *May only be called from `Signed` origin of a current member.
         *
         *Prime membership is passed from the origin account to `new`, if extant.
         */
        change_key: TxDescriptor<Anonymize<I8k3rnvpeeh4hv>>;
        /**
         *Set the prime member. Must be a current member.
         *
         *May only be called from `T::PrimeOrigin`.
         */
        set_prime: TxDescriptor<Anonymize<I59bngqm85b22v>>;
        /**
         *Remove the prime member if it exists.
         *
         *May only be called from `T::PrimeOrigin`.
         */
        clear_prime: TxDescriptor<undefined>;
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
    AwesomeAvatars: {
        /**
         *Issue a new avatar.
         *
         *Emits `AvatarsMinted` event when successful.
         *
         *Weight: `O(n)` where:
         *- `n = max avatars per player`
         */
        mint: TxDescriptor<Anonymize<I44lh4rmpnfa0f>>;
        /**
         *Forge an avatar.
         *
         *This action can enhance the skills of an avatar by consuming a batch of avatars.
         *The minimum and maximum number of avatars that can be utilized for forging is
         *defined in the season configuration.
         *
         *Emits `AvatarForged` event when successful.
         *
         *Weight: `O(1)`
         */
        forge: TxDescriptor<Anonymize<I9dg1d3uk3bu1b>>;
        /**
        
         */
        transfer_avatar: TxDescriptor<Anonymize<I4fu0c1toh0cs9>>;
        /**
         *Transfer free mints to a given account.
         *
         *Emits `FreeMintsTransferred` event when successful.
         *
         *Weight: `O(1)`
         */
        transfer_free_mints: TxDescriptor<Anonymize<I791cep71jr7vk>>;
        /**
         *Set the price of a given avatar.
         *
         *Only allowed while trade period is open.
         *
         *Emits `AvatarPriceSet` event when successful.
         *
         *Weight: `O(1)`
         */
        set_price: TxDescriptor<Anonymize<I17ee5lcqg58fo>>;
        /**
         *Remove the price of a given avatar.
         *
         *Only allowed while trade period is open.
         *
         *Emits `AvatarPriceUnset` event when successful.
         *
         *Weight: `O(1)`
         */
        remove_price: TxDescriptor<Anonymize<Iei939moq39gbg>>;
        /**
         *Buy the given avatar.
         *
         *It consumes tokens for the trade operation. The avatar will be owned by the
         *player after the transaction.
         *
         *Only allowed while trade period is open.
         *
         *Emits `AvatarTraded` event when successful.
         *
         *Weight: `O(1)`
         */
        buy: TxDescriptor<Anonymize<Iei939moq39gbg>>;
        /**
         *Upgrade the avatar inventory space in a season.
         *
         ** If called with a value in the **beneficiary** parameter, that account will receive the
         *  upgrade
         *instead of the caller.
         ** If the **in_season** parameter contains a value, this will set which specific season
         *will the storage be upgraded for, if no value is set then the current season will be the
         *one for which the storage will be upgraded.
         *
         *In all cases the upgrade fees are **paid by the caller**.
         *
         *Emits `StorageTierUpgraded` event when successful.
         *
         *Weight: `O(1)`
         */
        upgrade_storage: TxDescriptor<Anonymize<I2m5ipdvv5t77s>>;
        /**
         *Set game organizer.
         *
         *The organizer account is like an admin, allowed to perform certain operations
         *related with the game configuration like `set_season`, `ensure_free_mint` and
         *`update_global_config`.
         *
         *It can only be set by a root account.
         *
         *Emits `OrganizerSet` event when successful.
         *
         *Weight: `O(1)`
         */
        set_organizer: TxDescriptor<Anonymize<Ifed8uh0vbjcgd>>;
        /**
         *Set treasurer.
         *
         *This is an additional treasury.
         *
         *It can only be set by a root account.
         *
         *Emits `TreasurerSet` event when successful.
         *
         *Weight: `O(1)`
         */
        set_treasurer: TxDescriptor<Anonymize<I1f2jpppft84oo>>;
        /**
         *Claim treasury of a season.
         *
         *The origin of this call must be signed by a treasurer account associated with the given
         *season ID. The treasurer of a season can claim the season's associated treasury once the
         *season finishes.
         *
         *Weight: `O(1)`
         */
        claim_treasury: TxDescriptor<Anonymize<Idd0agfql4ht2e>>;
        /**
         *Set season.
         *
         *Creates a new season. The new season can overlap with the already existing.
         *
         *It can only be set by an organizer account.
         *
         *Emits `UpdatedSeason` event when successful.
         *
         *Weight: `O(1)`
         */
        set_season: TxDescriptor<Anonymize<Iba6c2u0vs2tso>>;
        /**
         *Update global configuration.
         *
         *It can only be called by an organizer account.
         *
         *Emits `UpdatedGlobalConfig` event when successful.
         *
         *Weight: `O(1)`
         */
        update_global_config: TxDescriptor<Anonymize<I7tc6iuhh6e2kj>>;
        /**
         *Set free mints.
         *
         *It can only be called by an organizer account.
         *
         *Emits `FreeMintSet` event when successful.
         *
         *Weight: `O(1)`
         */
        set_free_mints: TxDescriptor<Anonymize<Ibr3v4g7muoai>>;
        /**
         *Set the collection ID to associate avatars with.
         *
         *Externally created collection ID for avatars must be set in the `CollectionId` storage
         *to serve as a lookup for locking and unlocking avatars as NFTs.
         *
         *Weight: `O(1)`
         */
        set_collection_id: TxDescriptor<Anonymize<I9m43jftr52of7>>;
        /**
         *Locks an avatar to be tokenized as an NFT.
         *
         *The origin of this call must specify an avatar, owned by the origin, to prevent it from
         *forging, trading and transferring it to other players. When successful, the ownership of
         *the avatar is removed from the player.
         *
         *Locking an avatar allows for new
         *ways of interacting with it currently under development.
         *
         *Weight: `O(n)` where:
         *- `n = max avatars per player`
         */
        lock_avatar: TxDescriptor<Anonymize<Iei939moq39gbg>>;
        /**
         *Unlocks an avatar removing its NFT representation.
         *
         *The origin of this call must specify an avatar, owned and locked by the origin, to allow
         *forging, trading and transferring it to other players. When successful, the ownership of
         *the avatar is transferred from the pallet's technical account back to the player and its
         *existing NFT representation is destroyed.
         *
         *Weight: `O(n)` where:
         *- `n = max avatars per player`
         */
        unlock_avatar: TxDescriptor<Anonymize<Iei939moq39gbg>>;
        /**
         *Set a service account.
         *
         *The origin of this call must be root. A service account has sufficient privilege to call
         *the `prepare_ipfs` extrinsic.
         *
         *Weight: `O(1)`
         */
        set_service_account: TxDescriptor<Anonymize<I4bl7mag1e12kj>>;
        /**
         *Prepare an avatar to be uploaded to IPFS.
         *
         *The origin of this call must specify an avatar, owned by the origin, to display the
         *intention of uploading it to an IPFS storage. When successful, the `PreparedAvatar`
         *event is emitted to be picked up by our external service that interacts with the IPFS.
         *
         *Weight: `O(1)`
         */
        prepare_avatar: TxDescriptor<Anonymize<Iei939moq39gbg>>;
        /**
         *Unprepare an avatar to be detached from IPFS.
         *
         *The origin of this call must specify an avatar, owned by the origin, that is undergoing
         *the IPFS upload process.
         *
         *Weight: `O(1)`
         */
        unprepare_avatar: TxDescriptor<Anonymize<Iei939moq39gbg>>;
        /**
         *Prepare IPFS for an avatar.
         *
         *The origin of this call must be signed by the service account to upload the given avatar
         *to an IPFS storage and stores its CID. A third-party service subscribes for the
         *`PreparedAvatar` events which triggers preparing assets, their upload to IPFS and
         *storing their CIDs.
         *Weight: `O(1)`
         */
        prepare_ipfs: TxDescriptor<Anonymize<I63t4qjre8p07>>;
        /**
        
         */
        modify_freemint_whitelist: TxDescriptor<Anonymize<I82ha1bkblkltf>>;
        /**
        
         */
        add_affiliation: TxDescriptor<Anonymize<I79d0gjumllf3p>>;
        /**
        
         */
        enable_affiliator: TxDescriptor<Anonymize<I8na1q0fm3gru3>>;
        /**
        
         */
        remove_affiliation: TxDescriptor<Anonymize<Icbccs0ug47ilf>>;
        /**
        
         */
        set_rule_for: TxDescriptor<Anonymize<Ici9ktteg8dv3n>>;
        /**
        
         */
        clear_rule_for: TxDescriptor<Anonymize<I23pebjb6u0sjr>>;
        /**
        
         */
        enable_set_avatar_price: TxDescriptor<Anonymize<I8na1q0fm3gru3>>;
        /**
        
         */
        enable_avatar_transfer: TxDescriptor<Anonymize<I8na1q0fm3gru3>>;
        /**
        
         */
        set_unlock_config: TxDescriptor<Anonymize<I48pmthsc1v95n>>;
        /**
        
         */
        create_tournament: TxDescriptor<Anonymize<Idljrjthg9cgvs>>;
        /**
        
         */
        remove_latest_tournament: TxDescriptor<Anonymize<Idd0agfql4ht2e>>;
        /**
        
         */
        claim_tournament_reward_for: TxDescriptor<Anonymize<Icl5mhdj63q3co>>;
        /**
        
         */
        claim_golden_duck_for: TxDescriptor<Anonymize<Icl5mhdj63q3co>>;
        /**
        
         */
        force_set_affiliatee_state: TxDescriptor<Anonymize<Ia6i3ugstbq8s9>>;
    };
    Nft: {
        /**
         *Issue a new collection of non-fungible items from a public origin.
         *
         *This new collection has no items initially and its owner is the origin.
         *
         *The origin must be Signed and the sender must have sufficient funds free.
         *
         *`CollectionDeposit` funds of sender are reserved.
         *
         *Parameters:
         *- `admin`: The admin of this collection. The admin is the initial address of each
         *member of the collection's admin team.
         *
         *Emits `Created` event when successful.
         *
         *Weight: `O(1)`
         */
        create: TxDescriptor<Anonymize<I43aobns89nbkh>>;
        /**
         *Issue a new collection of non-fungible items from a privileged origin.
         *
         *This new collection has no items initially.
         *
         *The origin must conform to `ForceOrigin`.
         *
         *Unlike `create`, no funds are reserved.
         *
         *- `owner`: The owner of this collection of items. The owner has full superuser
         *  permissions over this item, but may later change and configure the permissions using
         *  `transfer_ownership` and `set_team`.
         *
         *Emits `ForceCreated` event when successful.
         *
         *Weight: `O(1)`
         */
        force_create: TxDescriptor<Anonymize<Iamd7rovec1hfb>>;
        /**
         *Destroy a collection of fungible items.
         *
         *The origin must conform to `ForceOrigin` or must be `Signed` and the sender must be the
         *owner of the `collection`.
         *
         *NOTE: The collection must have 0 items to be destroyed.
         *
         *- `collection`: The identifier of the collection to be destroyed.
         *- `witness`: Information on the items minted in the collection. This must be
         *correct.
         *
         *Emits `Destroyed` event when successful.
         *
         *Weight: `O(m + c + a)` where:
         *- `m = witness.item_metadatas`
         *- `c = witness.item_configs`
         *- `a = witness.attributes`
         */
        destroy: TxDescriptor<Anonymize<I77ie723ncd4co>>;
        /**
         *Mint an item of a particular collection.
         *
         *The origin must be Signed and the sender must comply with the `mint_settings` rules.
         *
         *- `collection`: The collection of the item to be minted.
         *- `item`: An identifier of the new item.
         *- `mint_to`: Account into which the item will be minted.
         *- `witness_data`: When the mint type is `HolderOf(collection_id)`, then the owned
         *  item_id from that collection needs to be provided within the witness data object. If
         *  the mint price is set, then it should be additionally confirmed in the `witness_data`.
         *
         *Note: the deposit will be taken from the `origin` and not the `owner` of the `item`.
         *
         *Emits `Issued` event when successful.
         *
         *Weight: `O(1)`
         */
        mint: TxDescriptor<Anonymize<Id5st2uggeqkuv>>;
        /**
         *Mint an item of a particular collection from a privileged origin.
         *
         *The origin must conform to `ForceOrigin` or must be `Signed` and the sender must be the
         *Issuer of the `collection`.
         *
         *- `collection`: The collection of the item to be minted.
         *- `item`: An identifier of the new item.
         *- `mint_to`: Account into which the item will be minted.
         *- `item_config`: A config of the new item.
         *
         *Emits `Issued` event when successful.
         *
         *Weight: `O(1)`
         */
        force_mint: TxDescriptor<Anonymize<Ie2e4vrmpajbaj>>;
        /**
         *Destroy a single item.
         *
         *The origin must conform to `ForceOrigin` or must be Signed and the signing account must
         *be the owner of the `item`.
         *
         *- `collection`: The collection of the item to be burned.
         *- `item`: The item to be burned.
         *
         *Emits `Burned`.
         *
         *Weight: `O(1)`
         */
        burn: TxDescriptor<Anonymize<I967cc5plil9ee>>;
        /**
         *Move an item from the sender account to another.
         *
         *Origin must be Signed and the signing account must be either:
         *- the Owner of the `item`;
         *- the approved delegate for the `item` (in this case, the approval is reset).
         *
         *Arguments:
         *- `collection`: The collection of the item to be transferred.
         *- `item`: The item to be transferred.
         *- `dest`: The account to receive ownership of the item.
         *
         *Emits `Transferred`.
         *
         *Weight: `O(1)`
         */
        transfer: TxDescriptor<Anonymize<I2fduahu6reml1>>;
        /**
         *Re-evaluate the deposits on some items.
         *
         *Origin must be Signed and the sender should be the Owner of the `collection`.
         *
         *- `collection`: The collection of the items to be reevaluated.
         *- `items`: The items of the collection whose deposits will be reevaluated.
         *
         *NOTE: This exists as a best-effort function. Any items which are unknown or
         *in the case that the owner account does not have reservable funds to pay for a
         *deposit increase are ignored. Generally the owner isn't going to call this on items
         *whose existing deposit is less than the refreshed deposit as it would only cost them,
         *so it's of little consequence.
         *
         *It will still return an error in the case that the collection is unknown or the signer
         *is not permitted to call it.
         *
         *Weight: `O(items.len())`
         */
        redeposit: TxDescriptor<Anonymize<Ibc3j2befnu476>>;
        /**
         *Disallow further unprivileged transfer of an item.
         *
         *Origin must be Signed and the sender should be the Freezer of the `collection`.
         *
         *- `collection`: The collection of the item to be changed.
         *- `item`: The item to become non-transferable.
         *
         *Emits `ItemTransferLocked`.
         *
         *Weight: `O(1)`
         */
        lock_item_transfer: TxDescriptor<Anonymize<I967cc5plil9ee>>;
        /**
         *Re-allow unprivileged transfer of an item.
         *
         *Origin must be Signed and the sender should be the Freezer of the `collection`.
         *
         *- `collection`: The collection of the item to be changed.
         *- `item`: The item to become transferable.
         *
         *Emits `ItemTransferUnlocked`.
         *
         *Weight: `O(1)`
         */
        unlock_item_transfer: TxDescriptor<Anonymize<I967cc5plil9ee>>;
        /**
         *Disallows specified settings for the whole collection.
         *
         *Origin must be Signed and the sender should be the Owner of the `collection`.
         *
         *- `collection`: The collection to be locked.
         *- `lock_settings`: The settings to be locked.
         *
         *Note: it's possible to only lock(set) the setting, but not to unset it.
         *
         *Emits `CollectionLocked`.
         *
         *Weight: `O(1)`
         */
        lock_collection: TxDescriptor<Anonymize<I1ahf3pvgsgbu>>;
        /**
         *Change the Owner of a collection.
         *
         *Origin must be Signed and the sender should be the Owner of the `collection`.
         *
         *- `collection`: The collection whose owner should be changed.
         *- `owner`: The new Owner of this collection. They must have called
         *  `set_accept_ownership` with `collection` in order for this operation to succeed.
         *
         *Emits `OwnerChanged`.
         *
         *Weight: `O(1)`
         */
        transfer_ownership: TxDescriptor<Anonymize<I736lv5q9m5bot>>;
        /**
         *Change the Issuer, Admin and Freezer of a collection.
         *
         *Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
         *`collection`.
         *
         *Note: by setting the role to `None` only the `ForceOrigin` will be able to change it
         *after to `Some(account)`.
         *
         *- `collection`: The collection whose team should be changed.
         *- `issuer`: The new Issuer of this collection.
         *- `admin`: The new Admin of this collection.
         *- `freezer`: The new Freezer of this collection.
         *
         *Emits `TeamChanged`.
         *
         *Weight: `O(1)`
         */
        set_team: TxDescriptor<Anonymize<I9uapdn16emsti>>;
        /**
         *Change the Owner of a collection.
         *
         *Origin must be `ForceOrigin`.
         *
         *- `collection`: The identifier of the collection.
         *- `owner`: The new Owner of this collection.
         *
         *Emits `OwnerChanged`.
         *
         *Weight: `O(1)`
         */
        force_collection_owner: TxDescriptor<Anonymize<Ie5i0q2glmr0md>>;
        /**
         *Change the config of a collection.
         *
         *Origin must be `ForceOrigin`.
         *
         *- `collection`: The identifier of the collection.
         *- `config`: The new config of this collection.
         *
         *Emits `CollectionConfigChanged`.
         *
         *Weight: `O(1)`
         */
        force_collection_config: TxDescriptor<Anonymize<I97qcg6i3l8gee>>;
        /**
         *Approve an item to be transferred by a delegated third-party account.
         *
         *Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
         *`item`.
         *
         *- `collection`: The collection of the item to be approved for delegated transfer.
         *- `item`: The item to be approved for delegated transfer.
         *- `delegate`: The account to delegate permission to transfer the item.
         *- `maybe_deadline`: Optional deadline for the approval. Specified by providing the
         *	number of blocks after which the approval will expire
         *
         *Emits `TransferApproved` on success.
         *
         *Weight: `O(1)`
         */
        approve_transfer: TxDescriptor<Anonymize<I7epd4srjf5oni>>;
        /**
         *Cancel one of the transfer approvals for a specific item.
         *
         *Origin must be either:
         *- the `Force` origin;
         *- `Signed` with the signer being the Owner of the `item`;
         *
         *Arguments:
         *- `collection`: The collection of the item of whose approval will be cancelled.
         *- `item`: The item of the collection of whose approval will be cancelled.
         *- `delegate`: The account that is going to loose their approval.
         *
         *Emits `ApprovalCancelled` on success.
         *
         *Weight: `O(1)`
         */
        cancel_approval: TxDescriptor<Anonymize<I9fs2blc4ic3ra>>;
        /**
         *Cancel all the approvals of a specific item.
         *
         *Origin must be either:
         *- the `Force` origin;
         *- `Signed` with the signer being the Owner of the `item`;
         *
         *Arguments:
         *- `collection`: The collection of the item of whose approvals will be cleared.
         *- `item`: The item of the collection of whose approvals will be cleared.
         *
         *Emits `AllApprovalsCancelled` on success.
         *
         *Weight: `O(1)`
         */
        clear_all_transfer_approvals: TxDescriptor<Anonymize<I967cc5plil9ee>>;
        /**
         *Disallows changing the metadata or attributes of the item.
         *
         *Origin must be either `ForceOrigin` or Signed and the sender should be the Admin
         *of the `collection`.
         *
         *- `collection`: The collection if the `item`.
         *- `item`: An item to be locked.
         *- `lock_metadata`: Specifies whether the metadata should be locked.
         *- `lock_attributes`: Specifies whether the attributes in the `CollectionOwner` namespace
         *  should be locked.
         *
         *Note: `lock_attributes` affects the attributes in the `CollectionOwner` namespace only.
         *When the metadata or attributes are locked, it won't be possible the unlock them.
         *
         *Emits `ItemPropertiesLocked`.
         *
         *Weight: `O(1)`
         */
        lock_item_properties: TxDescriptor<Anonymize<I55lhkfmlkf2o>>;
        /**
         *Set an attribute for a collection or item.
         *
         *Origin must be Signed and must conform to the namespace ruleset:
         *- `CollectionOwner` namespace could be modified by the `collection` Admin only;
         *- `ItemOwner` namespace could be modified by the `maybe_item` owner only. `maybe_item`
         *  should be set in that case;
         *- `Account(AccountId)` namespace could be modified only when the `origin` was given a
         *  permission to do so;
         *
         *The funds of `origin` are reserved according to the formula:
         *`AttributeDepositBase + DepositPerByte * (key.len + value.len)` taking into
         *account any already reserved funds.
         *
         *- `collection`: The identifier of the collection whose item's metadata to set.
         *- `maybe_item`: The identifier of the item whose metadata to set.
         *- `namespace`: Attribute's namespace.
         *- `key`: The key of the attribute.
         *- `value`: The value to which to set the attribute.
         *
         *Emits `AttributeSet`.
         *
         *Weight: `O(1)`
         */
        set_attribute: TxDescriptor<Anonymize<I9rbronoeqvn6m>>;
        /**
         *Force-set an attribute for a collection or item.
         *
         *Origin must be `ForceOrigin`.
         *
         *If the attribute already exists and it was set by another account, the deposit
         *will be returned to the previous owner.
         *
         *- `set_as`: An optional owner of the attribute.
         *- `collection`: The identifier of the collection whose item's metadata to set.
         *- `maybe_item`: The identifier of the item whose metadata to set.
         *- `namespace`: Attribute's namespace.
         *- `key`: The key of the attribute.
         *- `value`: The value to which to set the attribute.
         *
         *Emits `AttributeSet`.
         *
         *Weight: `O(1)`
         */
        force_set_attribute: TxDescriptor<Anonymize<Ib71ijmpmks7if>>;
        /**
         *Clear an attribute for a collection or item.
         *
         *Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
         *attribute.
         *
         *Any deposit is freed for the collection's owner.
         *
         *- `collection`: The identifier of the collection whose item's metadata to clear.
         *- `maybe_item`: The identifier of the item whose metadata to clear.
         *- `namespace`: Attribute's namespace.
         *- `key`: The key of the attribute.
         *
         *Emits `AttributeCleared`.
         *
         *Weight: `O(1)`
         */
        clear_attribute: TxDescriptor<Anonymize<I390pvf5otr0bf>>;
        /**
         *Approve item's attributes to be changed by a delegated third-party account.
         *
         *Origin must be Signed and must be an owner of the `item`.
         *
         *- `collection`: A collection of the item.
         *- `item`: The item that holds attributes.
         *- `delegate`: The account to delegate permission to change attributes of the item.
         *
         *Emits `ItemAttributesApprovalAdded` on success.
         */
        approve_item_attributes: TxDescriptor<Anonymize<I9fs2blc4ic3ra>>;
        /**
         *Cancel the previously provided approval to change item's attributes.
         *All the previously set attributes by the `delegate` will be removed.
         *
         *Origin must be Signed and must be an owner of the `item`.
         *
         *- `collection`: Collection that the item is contained within.
         *- `item`: The item that holds attributes.
         *- `delegate`: The previously approved account to remove.
         *
         *Emits `ItemAttributesApprovalRemoved` on success.
         */
        cancel_item_attributes_approval: TxDescriptor<Anonymize<I1crr8dg4bmmbe>>;
        /**
         *Set the metadata for an item.
         *
         *Origin must be either `ForceOrigin` or Signed and the sender should be the Admin of the
         *`collection`.
         *
         *If the origin is Signed, then funds of signer are reserved according to the formula:
         *`MetadataDepositBase + DepositPerByte * data.len` taking into
         *account any already reserved funds.
         *
         *- `collection`: The identifier of the collection whose item's metadata to set.
         *- `item`: The identifier of the item whose metadata to set.
         *- `data`: The general information of this item. Limited in length by `StringLimit`.
         *
         *Emits `ItemMetadataSet`.
         *
         *Weight: `O(1)`
         */
        set_metadata: TxDescriptor<Anonymize<Ib01fcn0puf5on>>;
        /**
         *Clear the metadata for an item.
         *
         *Origin must be either `ForceOrigin` or Signed and the sender should be the Admin of the
         *`collection`.
         *
         *Any deposit is freed for the collection's owner.
         *
         *- `collection`: The identifier of the collection whose item's metadata to clear.
         *- `item`: The identifier of the item whose metadata to clear.
         *
         *Emits `ItemMetadataCleared`.
         *
         *Weight: `O(1)`
         */
        clear_metadata: TxDescriptor<Anonymize<I967cc5plil9ee>>;
        /**
         *Set the metadata for a collection.
         *
         *Origin must be either `ForceOrigin` or `Signed` and the sender should be the Admin of
         *the `collection`.
         *
         *If the origin is `Signed`, then funds of signer are reserved according to the formula:
         *`MetadataDepositBase + DepositPerByte * data.len` taking into
         *account any already reserved funds.
         *
         *- `collection`: The identifier of the item whose metadata to update.
         *- `data`: The general information of this item. Limited in length by `StringLimit`.
         *
         *Emits `CollectionMetadataSet`.
         *
         *Weight: `O(1)`
         */
        set_collection_metadata: TxDescriptor<Anonymize<I78u60nqh0etah>>;
        /**
         *Clear the metadata for a collection.
         *
         *Origin must be either `ForceOrigin` or `Signed` and the sender should be the Admin of
         *the `collection`.
         *
         *Any deposit is freed for the collection's owner.
         *
         *- `collection`: The identifier of the collection whose metadata to clear.
         *
         *Emits `CollectionMetadataCleared`.
         *
         *Weight: `O(1)`
         */
        clear_collection_metadata: TxDescriptor<Anonymize<I6cu7obfo0rr0o>>;
        /**
         *Set (or reset) the acceptance of ownership for a particular account.
         *
         *Origin must be `Signed` and if `maybe_collection` is `Some`, then the signer must have a
         *provider reference.
         *
         *- `maybe_collection`: The identifier of the collection whose ownership the signer is
         *  willing to accept, or if `None`, an indication that the signer is willing to accept no
         *  ownership transferal.
         *
         *Emits `OwnershipAcceptanceChanged`.
         */
        set_accept_ownership: TxDescriptor<Anonymize<Ibqooroq6rr5kr>>;
        /**
         *Set the maximum number of items a collection could have.
         *
         *Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of
         *the `collection`.
         *
         *- `collection`: The identifier of the collection to change.
         *- `max_supply`: The maximum number of items a collection could have.
         *
         *Emits `CollectionMaxSupplySet` event when successful.
         */
        set_collection_max_supply: TxDescriptor<Anonymize<I6h88h8vba22v8>>;
        /**
         *Update mint settings.
         *
         *Origin must be either `ForceOrigin` or `Signed` and the sender should be the Issuer
         *of the `collection`.
         *
         *- `collection`: The identifier of the collection to change.
         *- `mint_settings`: The new mint settings.
         *
         *Emits `CollectionMintSettingsUpdated` event when successful.
         */
        update_mint_settings: TxDescriptor<Anonymize<I1lso3vlgherue>>;
        /**
         *Set (or reset) the price for an item.
         *
         *Origin must be Signed and must be the owner of the `item`.
         *
         *- `collection`: The collection of the item.
         *- `item`: The item to set the price for.
         *- `price`: The price for the item. Pass `None`, to reset the price.
         *- `buyer`: Restricts the buy operation to a specific account.
         *
         *Emits `ItemPriceSet` on success if the price is not `None`.
         *Emits `ItemPriceRemoved` on success if the price is `None`.
         */
        set_price: TxDescriptor<Anonymize<Ictijv9qf8cp6c>>;
        /**
         *Allows to buy an item if it's up for sale.
         *
         *Origin must be Signed and must not be the owner of the `item`.
         *
         *- `collection`: The collection of the item.
         *- `item`: The item the sender wants to buy.
         *- `bid_price`: The price the sender is willing to pay.
         *
         *Emits `ItemBought` on success.
         */
        buy_item: TxDescriptor<Anonymize<Ia816a31tsod2>>;
        /**
         *Allows to pay the tips.
         *
         *Origin must be Signed.
         *
         *- `tips`: Tips array.
         *
         *Emits `TipSent` on every tip transfer.
         */
        pay_tips: TxDescriptor<Anonymize<I9acqpiprtu6tf>>;
        /**
         *Register a new atomic swap, declaring an intention to send an `item` in exchange for
         *`desired_item` from origin to target on the current blockchain.
         *The target can execute the swap during the specified `duration` of blocks (if set).
         *Additionally, the price could be set for the desired `item`.
         *
         *Origin must be Signed and must be an owner of the `item`.
         *
         *- `collection`: The collection of the item.
         *- `item`: The item an owner wants to give.
         *- `desired_collection`: The collection of the desired item.
         *- `desired_item`: The desired item an owner wants to receive.
         *- `maybe_price`: The price an owner is willing to pay or receive for the desired `item`.
         *- `duration`: A deadline for the swap. Specified by providing the number of blocks
         *	after which the swap will expire.
         *
         *Emits `SwapCreated` on success.
         */
        create_swap: TxDescriptor<Anonymize<Iaf8e9qglrhih2>>;
        /**
         *Cancel an atomic swap.
         *
         *Origin must be Signed.
         *Origin must be an owner of the `item` if the deadline hasn't expired.
         *
         *- `collection`: The collection of the item.
         *- `item`: The item an owner wants to give.
         *
         *Emits `SwapCancelled` on success.
         */
        cancel_swap: TxDescriptor<Anonymize<Ibql9001kpi744>>;
        /**
         *Claim an atomic swap.
         *This method executes a pending swap, that was created by a counterpart before.
         *
         *Origin must be Signed and must be an owner of the `item`.
         *
         *- `send_collection`: The collection of the item to be sent.
         *- `send_item`: The item to be sent.
         *- `receive_collection`: The collection of the item to be received.
         *- `receive_item`: The item to be received.
         *- `witness_price`: A price that was previously agreed on.
         *
         *Emits `SwapClaimed` on success.
         */
        claim_swap: TxDescriptor<Anonymize<Ibfmniebsn49g3>>;
        /**
         *Mint an item by providing the pre-signed approval.
         *
         *Origin must be Signed.
         *
         *- `mint_data`: The pre-signed approval that consists of the information about the item,
         *  its metadata, attributes, who can mint it (`None` for anyone) and until what block
         *  number.
         *- `signature`: The signature of the `data` object.
         *- `signer`: The `data` object's signer. Should be an Issuer of the collection.
         *
         *Emits `Issued` on success.
         *Emits `AttributeSet` if the attributes were provided.
         *Emits `ItemMetadataSet` if the metadata was not empty.
         */
        mint_pre_signed: TxDescriptor<Anonymize<I61si3mpn5dd3p>>;
        /**
         *Set attributes for an item by providing the pre-signed approval.
         *
         *Origin must be Signed and must be an owner of the `data.item`.
         *
         *- `data`: The pre-signed approval that consists of the information about the item,
         *  attributes to update and until what block number.
         *- `signature`: The signature of the `data` object.
         *- `signer`: The `data` object's signer. Should be an Admin of the collection for the
         *  `CollectionOwner` namespace.
         *
         *Emits `AttributeSet` for each provided attribute.
         *Emits `ItemAttributesApprovalAdded` if the approval wasn't set before.
         *Emits `PreSignedAttributesSet` on success.
         */
        set_attributes_pre_signed: TxDescriptor<Anonymize<I4ukhjbm2uut91>>;
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
         *
         *The asset class must be frozen before calling `start_destroy`.
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
    };
    AssetRegistry: {
        /**
        
         */
        register_reserve_asset: TxDescriptor<Anonymize<If30c5nhp9me6o>>;
        /**
        
         */
        unregister_reserve_asset: TxDescriptor<Anonymize<Ia5le7udkgbaq9>>;
    };
    PoolAssets: {
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
         *
         *The asset class must be frozen before calling `start_destroy`.
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
    };
    AssetConversion: {
        /**
         *Creates an empty liquidity pool and an associated new `lp_token` asset
         *(the id of which is returned in the `Event::PoolCreated` event).
         *
         *Once a pool is created, someone may [`Pallet::add_liquidity`] to it.
         */
        create_pool: TxDescriptor<Anonymize<Ibot63dbdh2glr>>;
        /**
         *Provide liquidity into the pool of `asset1` and `asset2`.
         *NOTE: an optimal amount of asset1 and asset2 will be calculated and
         *might be different than the provided `amount1_desired`/`amount2_desired`
         *thus you should provide the min amount you're happy to provide.
         *Params `amount1_min`/`amount2_min` represent that.
         *`mint_to` will be sent the liquidity tokens that represent this share of the pool.
         *
         *NOTE: when encountering an incorrect exchange rate and non-withdrawable pool liquidity,
         *batch an atomic call with [`Pallet::add_liquidity`] and
         *[`Pallet::swap_exact_tokens_for_tokens`] or [`Pallet::swap_tokens_for_exact_tokens`]
         *calls to render the liquidity withdrawable and rectify the exchange rate.
         *
         *Once liquidity is added, someone may successfully call
         *[`Pallet::swap_exact_tokens_for_tokens`] successfully.
         */
        add_liquidity: TxDescriptor<Anonymize<I159idlqohsibn>>;
        /**
         *Allows you to remove liquidity by providing the `lp_token_burn` tokens that will be
         *burned in the process. With the usage of `amount1_min_receive`/`amount2_min_receive`
         *it's possible to control the min amount of returned tokens you're happy with.
         */
        remove_liquidity: TxDescriptor<Anonymize<Iakc63ljp5po9a>>;
        /**
         *Swap the exact amount of `asset1` into `asset2`.
         *`amount_out_min` param allows you to specify the min amount of the `asset2`
         *you're happy to receive.
         *
         *[`AssetConversionApi::quote_price_exact_tokens_for_tokens`] runtime call can be called
         *for a quote.
         */
        swap_exact_tokens_for_tokens: TxDescriptor<Anonymize<Id3g8b5i00okmf>>;
        /**
         *Swap any amount of `asset1` to get the exact amount of `asset2`.
         *`amount_in_max` param allows to specify the max amount of the `asset1`
         *you're happy to provide.
         *
         *[`AssetConversionApi::quote_price_tokens_for_exact_tokens`] runtime call can be called
         *for a quote.
         */
        swap_tokens_for_exact_tokens: TxDescriptor<Anonymize<I4te2k2l2kne4q>>;
        /**
         *Touch an existing pool to fulfill prerequisites before providing liquidity, such as
         *ensuring that the pool's accounts are in place. It is typically useful when a pool
         *creator removes the pool's accounts and does not provide a liquidity. This action may
         *involve holding assets from the caller as a deposit for creating the pool's accounts.
         *
         *The origin must be Signed.
         *
         *- `asset1`: The asset ID of an existing pool with a pair (asset1, asset2).
         *- `asset2`: The asset ID of an existing pool with a pair (asset1, asset2).
         *
         *Emits `Touched` event when successful.
         */
        touch: TxDescriptor<Anonymize<Ibot63dbdh2glr>>;
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
        ExtrinsicFailed: PlainDescriptor<Anonymize<I2195i78t232eh>>;
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
    ParachainSystem: {
        /**
         *The validation function has been scheduled to apply.
         */
        ValidationFunctionStored: PlainDescriptor<undefined>;
        /**
         *The validation function was applied as of the contained relay chain block number.
         */
        ValidationFunctionApplied: PlainDescriptor<Anonymize<Idd7hd99u0ho0n>>;
        /**
         *The relay-chain aborted the upgrade process.
         */
        ValidationFunctionDiscarded: PlainDescriptor<undefined>;
        /**
         *Some downward messages have been received and will be processed.
         */
        DownwardMessagesReceived: PlainDescriptor<Anonymize<Iafscmv8tjf0ou>>;
        /**
         *Downward messages were processed using the given weight.
         */
        DownwardMessagesProcessed: PlainDescriptor<Anonymize<I100l07kaehdlp>>;
        /**
         *An upward message was sent to the relay chain.
         */
        UpwardMessageSent: PlainDescriptor<Anonymize<I6gnbnvip5vvdi>>;
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
        MultisigExecuted: PlainDescriptor<Anonymize<Iakskgs2igc674>>;
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
        BatchInterrupted: PlainDescriptor<Anonymize<I71m9okfggihep>>;
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
        ItemFailed: PlainDescriptor<Anonymize<I3n6u7or3i8557>>;
        /**
         *A call was dispatched.
         */
        DispatchedAs: PlainDescriptor<Anonymize<I5a3kd6s3btcn2>>;
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
        ProxyExecuted: PlainDescriptor<Anonymize<I5a3kd6s3btcn2>>;
        /**
         *A pure account has been created by new proxy with given
         *disambiguation index and proxy type.
         */
        PureCreated: PlainDescriptor<Anonymize<I7svoh0vdq580e>>;
        /**
         *An announcement was placed to make a call in the future.
         */
        Announced: PlainDescriptor<Anonymize<I2ur0oeqg495j8>>;
        /**
         *A proxy was added.
         */
        ProxyAdded: PlainDescriptor<Anonymize<I8isvjsseb7fjo>>;
        /**
         *A proxy was removed.
         */
        ProxyRemoved: PlainDescriptor<Anonymize<I8isvjsseb7fjo>>;
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
        Dispatched: PlainDescriptor<Anonymize<Ib8ujv25s59kho>>;
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
    CollatorSelection: {
        /**
         *New Invulnerables were set.
         */
        NewInvulnerables: PlainDescriptor<Anonymize<I39t01nnod9109>>;
        /**
         *A new Invulnerable was added.
         */
        InvulnerableAdded: PlainDescriptor<Anonymize<I6v8sm60vvkmk7>>;
        /**
         *An Invulnerable was removed.
         */
        InvulnerableRemoved: PlainDescriptor<Anonymize<I6v8sm60vvkmk7>>;
        /**
         *The number of desired candidates was set.
         */
        NewDesiredCandidates: PlainDescriptor<Anonymize<I1qmtmbe5so8r3>>;
        /**
         *The candidacy bond was set.
         */
        NewCandidacyBond: PlainDescriptor<Anonymize<Ih99m6ehpcar7>>;
        /**
         *A new candidate joined.
         */
        CandidateAdded: PlainDescriptor<Anonymize<Idgorhsbgdq2ap>>;
        /**
         *Bond of a candidate updated.
         */
        CandidateBondUpdated: PlainDescriptor<Anonymize<Idgorhsbgdq2ap>>;
        /**
         *A candidate was removed.
         */
        CandidateRemoved: PlainDescriptor<Anonymize<I6v8sm60vvkmk7>>;
        /**
         *An account was replaced in the candidate list by another one.
         */
        CandidateReplaced: PlainDescriptor<Anonymize<I9ubb2kqevnu6t>>;
        /**
         *An account was unable to be added to the Invulnerables because they did not have keys
         *registered. Other Invulnerables may have been set.
         */
        InvalidInvulnerableSkipped: PlainDescriptor<Anonymize<I6v8sm60vvkmk7>>;
    };
    Session: {
        /**
         *New session has happened. Note that the argument is the session index, not the
         *block number as the type might suggest.
         */
        NewSession: PlainDescriptor<Anonymize<I2hq50pu2kdjpo>>;
    };
    XcmpQueue: {
        /**
         *An HRMP message was sent to a sibling parachain.
         */
        XcmpMessageSent: PlainDescriptor<Anonymize<I137t1cld92pod>>;
    };
    PolkadotXcm: {
        /**
         *Execution of an XCM message was attempted.
         */
        Attempted: PlainDescriptor<Anonymize<I2aatv5i0cb96a>>;
        /**
         *A XCM message was sent.
         */
        Sent: PlainDescriptor<Anonymize<Ib9msr5sr8t3dn>>;
        /**
         *Query response received which does not match a registered query. This may be because a
         *matching query was never registered, it may be because it is a duplicate response, or
         *because the query timed out.
         */
        UnexpectedResponse: PlainDescriptor<Anonymize<I3le5tr7ugg6l2>>;
        /**
         *Query response has been received and is ready for taking with `take_response`. There is
         *no registered notification call.
         */
        ResponseReady: PlainDescriptor<Anonymize<I3iun9sig164po>>;
        /**
         *Query response has been received and query is removed. The registered notification has
         *been dispatched and executed successfully.
         */
        Notified: PlainDescriptor<Anonymize<I2uqmls7kcdnii>>;
        /**
         *Query response has been received and query is removed. The registered notification
         *could not be dispatched because the dispatch weight is greater than the maximum weight
         *originally budgeted by this runtime for the query result.
         */
        NotifyOverweight: PlainDescriptor<Anonymize<Idg69klialbkb8>>;
        /**
         *Query response has been received and query is removed. There was a general error with
         *dispatching the notification call.
         */
        NotifyDispatchError: PlainDescriptor<Anonymize<I2uqmls7kcdnii>>;
        /**
         *Query response has been received and query is removed. The dispatch was unable to be
         *decoded into a `Call`; this might be due to dispatch function having a signature which
         *is not `(origin, QueryId, Response)`.
         */
        NotifyDecodeFailed: PlainDescriptor<Anonymize<I2uqmls7kcdnii>>;
        /**
         *Expected query response has been received but the origin location of the response does
         *not match that expected. The query remains registered for a later, valid, response to
         *be received and acted upon.
         */
        InvalidResponder: PlainDescriptor<Anonymize<I13jboebjcbglr>>;
        /**
         *Expected query response has been received but the expected origin location placed in
         *storage by this runtime previously cannot be decoded. The query remains registered.
         *
         *This is unexpected (since a location placed in storage in a previously executing
         *runtime should be readable prior to query timeout) and dangerous since the possibly
         *valid response will be dropped. Manual governance intervention is probably going to be
         *needed.
         */
        InvalidResponderVersion: PlainDescriptor<Anonymize<I3le5tr7ugg6l2>>;
        /**
         *Received query response has been read and removed.
         */
        ResponseTaken: PlainDescriptor<Anonymize<I30pg328m00nr3>>;
        /**
         *Some assets have been placed in an asset trap.
         */
        AssetsTrapped: PlainDescriptor<Anonymize<I381dkhrurdhrs>>;
        /**
         *An XCM version change notification message has been attempted to be sent.
         *
         *The cost of sending it (borne by the chain) is included.
         */
        VersionChangeNotified: PlainDescriptor<Anonymize<Ic8hi3qr11vngc>>;
        /**
         *The supported version of a location has been changed. This might be through an
         *automatic notification or a manual intervention.
         */
        SupportedVersionChanged: PlainDescriptor<Anonymize<Iabk8ljl5g8c86>>;
        /**
         *A given location which had a version change subscription was dropped owing to an error
         *sending the notification to it.
         */
        NotifyTargetSendFail: PlainDescriptor<Anonymize<Ibjdlecumfu7q7>>;
        /**
         *A given location which had a version change subscription was dropped owing to an error
         *migrating the location to our new XCM format.
         */
        NotifyTargetMigrationFail: PlainDescriptor<Anonymize<Ia9ems1kg7laoc>>;
        /**
         *Expected query response has been received but the expected querier location placed in
         *storage by this runtime previously cannot be decoded. The query remains registered.
         *
         *This is unexpected (since a location placed in storage in a previously executing
         *runtime should be readable prior to query timeout) and dangerous since the possibly
         *valid response will be dropped. Manual governance intervention is probably going to be
         *needed.
         */
        InvalidQuerierVersion: PlainDescriptor<Anonymize<I3le5tr7ugg6l2>>;
        /**
         *Expected query response has been received but the querier location of the response does
         *not match the expected. The query remains registered for a later, valid, response to
         *be received and acted upon.
         */
        InvalidQuerier: PlainDescriptor<Anonymize<I92fq0fa45vi3>>;
        /**
         *A remote has requested XCM version change notification from us and we have honored it.
         *A version information message is sent to them and its cost is included.
         */
        VersionNotifyStarted: PlainDescriptor<Anonymize<Id01dpp0dn2cj0>>;
        /**
         *We have requested that a remote chain send us XCM version change notifications.
         */
        VersionNotifyRequested: PlainDescriptor<Anonymize<Id01dpp0dn2cj0>>;
        /**
         *We have requested that a remote chain stops sending us XCM version change
         *notifications.
         */
        VersionNotifyUnrequested: PlainDescriptor<Anonymize<Id01dpp0dn2cj0>>;
        /**
         *Fees were paid from a location for an operation (often for using `SendXcm`).
         */
        FeesPaid: PlainDescriptor<Anonymize<I6nu8k62ck9o8o>>;
        /**
         *Some assets have been claimed from an asset trap
         */
        AssetsClaimed: PlainDescriptor<Anonymize<I381dkhrurdhrs>>;
        /**
         *A XCM version migration finished.
         */
        VersionMigrationFinished: PlainDescriptor<Anonymize<I6s1nbislhk619>>;
    };
    CumulusXcm: {
        /**
         *Downward message is invalid XCM.
         *\[ id \]
         */
        InvalidFormat: PlainDescriptor<FixedSizeBinary<32>>;
        /**
         *Downward message is unsupported version of XCM.
         *\[ id \]
         */
        UnsupportedVersion: PlainDescriptor<FixedSizeBinary<32>>;
        /**
         *Downward message executed with the given outcome.
         *\[ id, outcome \]
         */
        ExecutedDownward: PlainDescriptor<Anonymize<Iea25i7vqm7ot3>>;
    };
    MessageQueue: {
        /**
         *Message discarded due to an error in the `MessageProcessor` (usually a format error).
         */
        ProcessingFailed: PlainDescriptor<Anonymize<I1rvj4ubaplho0>>;
        /**
         *Message is processed.
         */
        Processed: PlainDescriptor<Anonymize<Ia3uu7lqcc1q1i>>;
        /**
         *Message placed in overweight queue.
         */
        OverweightEnqueued: PlainDescriptor<Anonymize<I7crucfnonitkn>>;
        /**
         *This page was reaped.
         */
        PageReaped: PlainDescriptor<Anonymize<I7tmrp94r9sq4n>>;
    };
    XTokens: {
        /**
         *Transferred `Asset` with fee.
         */
        TransferredAssets: PlainDescriptor<Anonymize<Ic04t5m0ihvrp5>>;
    };
    OrmlXcm: {
        /**
         *XCM message sent. \[to, message\]
         */
        Sent: PlainDescriptor<Anonymize<Id3ajno3thjgec>>;
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
        AssetSpendApproved: PlainDescriptor<Anonymize<I97u3kqqqkf4si>>;
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
        Executed: PlainDescriptor<Anonymize<Iegutdktkbpgql>>;
        /**
         *A single member did some action; result will be `Ok` if it returned without error.
         */
        MemberExecuted: PlainDescriptor<Anonymize<Iegutdktkbpgql>>;
        /**
         *A proposal was closed because its threshold was reached or after its duration was up.
         */
        Closed: PlainDescriptor<Anonymize<Iak7fhrgb9jnnq>>;
    };
    CouncilMembership: {
        /**
         *The given member was added; see the transaction for who.
         */
        MemberAdded: PlainDescriptor<undefined>;
        /**
         *The given member was removed; see the transaction for who.
         */
        MemberRemoved: PlainDescriptor<undefined>;
        /**
         *Two members were swapped; see the transaction for who.
         */
        MembersSwapped: PlainDescriptor<undefined>;
        /**
         *The membership was reset; see the transaction for who the new set is.
         */
        MembersReset: PlainDescriptor<undefined>;
        /**
         *One of the members' keys changed.
         */
        KeyChanged: PlainDescriptor<undefined>;
        /**
         *Phantom member, never used.
         */
        Dummy: PlainDescriptor<undefined>;
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
        Executed: PlainDescriptor<Anonymize<Iegutdktkbpgql>>;
        /**
         *A single member did some action; result will be `Ok` if it returned without error.
         */
        MemberExecuted: PlainDescriptor<Anonymize<Iegutdktkbpgql>>;
        /**
         *A proposal was closed because its threshold was reached or after its duration was up.
         */
        Closed: PlainDescriptor<Anonymize<Iak7fhrgb9jnnq>>;
    };
    TechnicalCommitteeMembership: {
        /**
         *The given member was added; see the transaction for who.
         */
        MemberAdded: PlainDescriptor<undefined>;
        /**
         *The given member was removed; see the transaction for who.
         */
        MemberRemoved: PlainDescriptor<undefined>;
        /**
         *Two members were swapped; see the transaction for who.
         */
        MembersSwapped: PlainDescriptor<undefined>;
        /**
         *The membership was reset; see the transaction for who the new set is.
         */
        MembersReset: PlainDescriptor<undefined>;
        /**
         *One of the members' keys changed.
         */
        KeyChanged: PlainDescriptor<undefined>;
        /**
         *Phantom member, never used.
         */
        Dummy: PlainDescriptor<undefined>;
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
    AwesomeAvatars: {
        /**
         *An organizer has been set.
         */
        OrganizerSet: PlainDescriptor<Anonymize<Ifed8uh0vbjcgd>>;
        /**
         *A service account has been set.
         */
        ServiceAccountSet: PlainDescriptor<Anonymize<I4bl7mag1e12kj>>;
        /**
         *A collection ID has been set.
         */
        CollectionIdSet: PlainDescriptor<Anonymize<I9m43jftr52of7>>;
        /**
         *A treasurer has been set for a season.
         */
        TreasurerSet: PlainDescriptor<Anonymize<I1f2jpppft84oo>>;
        /**
         *A season's treasury has been claimed by a treasurer.
         */
        TreasuryClaimed: PlainDescriptor<Anonymize<I56ac6ch45c4cm>>;
        /**
         *The season configuration for {season_id} has been updated.
         */
        UpdatedSeason: PlainDescriptor<Anonymize<I2gu3sldefttqk>>;
        /**
         *Global configuration updated.
         */
        UpdatedGlobalConfig: PlainDescriptor<Anonymize<I9b040l6qe31ee>>;
        /**
         *Avatars minted.
         */
        AvatarsMinted: PlainDescriptor<Anonymize<I5982bl57vgjh6>>;
        /**
         *Avatar forged.
         */
        AvatarsForged: PlainDescriptor<Anonymize<Ibem91ufpe6rcm>>;
        /**
         *Avatar transferred.
         */
        AvatarTransferred: PlainDescriptor<Anonymize<Idb5ifc5af0vmt>>;
        /**
         *A season has started.
         */
        SeasonStarted: PlainDescriptor<number>;
        /**
         *A season has finished.
         */
        SeasonFinished: PlainDescriptor<number>;
        /**
         *Free mints transferred between accounts.
         */
        FreeMintsTransferred: PlainDescriptor<Anonymize<I5dt4lseagnti4>>;
        /**
         *Free mints set for target account.
         */
        FreeMintsSet: PlainDescriptor<Anonymize<Ibr3v4g7muoai>>;
        /**
         *Avatar has price set for trade.
         */
        AvatarPriceSet: PlainDescriptor<Anonymize<I17ee5lcqg58fo>>;
        /**
         *Avatar has price removed for trade.
         */
        AvatarPriceUnset: PlainDescriptor<Anonymize<Iei939moq39gbg>>;
        /**
         *Avatar has been traded.
         */
        AvatarTraded: PlainDescriptor<Anonymize<If3sjml7g3ien6>>;
        /**
         *Avatar locked.
         */
        AvatarLocked: PlainDescriptor<Anonymize<Iei939moq39gbg>>;
        /**
         *Avatar unlocked.
         */
        AvatarUnlocked: PlainDescriptor<Anonymize<Iei939moq39gbg>>;
        /**
         *Storage tier has been upgraded.
         */
        StorageTierUpgraded: PlainDescriptor<Anonymize<I7qqk40o0k0k>>;
        /**
         *Avatar prepared.
         */
        PreparedAvatar: PlainDescriptor<Anonymize<Iei939moq39gbg>>;
        /**
         *Avatar unprepared.
         */
        UnpreparedAvatar: PlainDescriptor<Anonymize<Iei939moq39gbg>>;
        /**
         *IPFS URL prepared.
         */
        PreparedIpfsUrl: PlainDescriptor<Anonymize<I55fg6ai4l0792>>;
        /**
         *Unlock configurations updated.
         */
        UpdatedUnlockConfigs: PlainDescriptor<Anonymize<I48pmthsc1v95n>>;
    };
    Nft: {
        /**
         *A `collection` was created.
         */
        Created: PlainDescriptor<Anonymize<I9gqanbbbe917p>>;
        /**
         *A `collection` was force-created.
         */
        ForceCreated: PlainDescriptor<Anonymize<Id1m1230297f7a>>;
        /**
         *A `collection` was destroyed.
         */
        Destroyed: PlainDescriptor<Anonymize<I6cu7obfo0rr0o>>;
        /**
         *An `item` was issued.
         */
        Issued: PlainDescriptor<Anonymize<Ictgmcbe2bt2ad>>;
        /**
         *An `item` was transferred.
         */
        Transferred: PlainDescriptor<Anonymize<I2rg9ovfh2a7s5>>;
        /**
         *An `item` was destroyed.
         */
        Burned: PlainDescriptor<Anonymize<Ictgmcbe2bt2ad>>;
        /**
         *An `item` became non-transferable.
         */
        ItemTransferLocked: PlainDescriptor<Anonymize<I967cc5plil9ee>>;
        /**
         *An `item` became transferable.
         */
        ItemTransferUnlocked: PlainDescriptor<Anonymize<I967cc5plil9ee>>;
        /**
         *`item` metadata or attributes were locked.
         */
        ItemPropertiesLocked: PlainDescriptor<Anonymize<I55lhkfmlkf2o>>;
        /**
         *Some `collection` was locked.
         */
        CollectionLocked: PlainDescriptor<Anonymize<I6cu7obfo0rr0o>>;
        /**
         *The owner changed.
         */
        OwnerChanged: PlainDescriptor<Anonymize<Icahse3uoi76n7>>;
        /**
         *The management team changed.
         */
        TeamChanged: PlainDescriptor<Anonymize<Ico8bnjc6taa27>>;
        /**
         *An `item` of a `collection` has been approved by the `owner` for transfer by
         *a `delegate`.
         */
        TransferApproved: PlainDescriptor<Anonymize<Iadhr7eecq2fm4>>;
        /**
         *An approval for a `delegate` account to transfer the `item` of an item
         *`collection` was cancelled by its `owner`.
         */
        ApprovalCancelled: PlainDescriptor<Anonymize<Icc0sq4rlk4tgi>>;
        /**
         *All approvals of an item got cancelled.
         */
        AllApprovalsCancelled: PlainDescriptor<Anonymize<Ictgmcbe2bt2ad>>;
        /**
         *A `collection` has had its config changed by the `Force` origin.
         */
        CollectionConfigChanged: PlainDescriptor<Anonymize<I6cu7obfo0rr0o>>;
        /**
         *New metadata has been set for a `collection`.
         */
        CollectionMetadataSet: PlainDescriptor<Anonymize<I78u60nqh0etah>>;
        /**
         *Metadata has been cleared for a `collection`.
         */
        CollectionMetadataCleared: PlainDescriptor<Anonymize<I6cu7obfo0rr0o>>;
        /**
         *New metadata has been set for an item.
         */
        ItemMetadataSet: PlainDescriptor<Anonymize<Ib01fcn0puf5on>>;
        /**
         *Metadata has been cleared for an item.
         */
        ItemMetadataCleared: PlainDescriptor<Anonymize<I967cc5plil9ee>>;
        /**
         *The deposit for a set of `item`s within a `collection` has been updated.
         */
        Redeposited: PlainDescriptor<Anonymize<Ik93al405esnj>>;
        /**
         *New attribute metadata has been set for a `collection` or `item`.
         */
        AttributeSet: PlainDescriptor<Anonymize<I9rbronoeqvn6m>>;
        /**
         *Attribute metadata has been cleared for a `collection` or `item`.
         */
        AttributeCleared: PlainDescriptor<Anonymize<I390pvf5otr0bf>>;
        /**
         *A new approval to modify item attributes was added.
         */
        ItemAttributesApprovalAdded: PlainDescriptor<Anonymize<Ib9c9cil3ugvnt>>;
        /**
         *A new approval to modify item attributes was removed.
         */
        ItemAttributesApprovalRemoved: PlainDescriptor<Anonymize<Ib9c9cil3ugvnt>>;
        /**
         *Ownership acceptance has changed for an account.
         */
        OwnershipAcceptanceChanged: PlainDescriptor<Anonymize<I2v2ikqt2trp52>>;
        /**
         *Max supply has been set for a collection.
         */
        CollectionMaxSupplySet: PlainDescriptor<Anonymize<I6h88h8vba22v8>>;
        /**
         *Mint settings for a collection had changed.
         */
        CollectionMintSettingsUpdated: PlainDescriptor<Anonymize<I6cu7obfo0rr0o>>;
        /**
         *Event gets emitted when the `NextCollectionId` gets incremented.
         */
        NextCollectionIdIncremented: PlainDescriptor<Anonymize<I9ksla2si91s56>>;
        /**
         *The price was set for the item.
         */
        ItemPriceSet: PlainDescriptor<Anonymize<I8fj7r4t68ah6d>>;
        /**
         *The price for the item was removed.
         */
        ItemPriceRemoved: PlainDescriptor<Anonymize<I967cc5plil9ee>>;
        /**
         *An item was bought.
         */
        ItemBought: PlainDescriptor<Anonymize<I1utrf23ijcpl>>;
        /**
         *A tip was sent.
         */
        TipSent: PlainDescriptor<Anonymize<I6gofc77s601c4>>;
        /**
         *An `item` swap intent was created.
         */
        SwapCreated: PlainDescriptor<Anonymize<Ie7eurimnvna0g>>;
        /**
         *The swap was cancelled.
         */
        SwapCancelled: PlainDescriptor<Anonymize<Ie7eurimnvna0g>>;
        /**
         *The swap has been claimed.
         */
        SwapClaimed: PlainDescriptor<Anonymize<It19o6q6f6q32>>;
        /**
         *New attributes have been set for an `item` of the `collection`.
         */
        PreSignedAttributesSet: PlainDescriptor<Anonymize<If0nck66gfrlf4>>;
        /**
         *A new attribute in the `Pallet` namespace was set for the `collection` or an `item`
         *within that `collection`.
         */
        PalletAttributeSet: PlainDescriptor<Anonymize<Ifrbvj0k5k13i4>>;
    };
    NftTransfer: {
        /**
         *Item has been stored as an NFT [collection_id, item_id, owner]
         */
        ItemStored: PlainDescriptor<Anonymize<I4cn9jhc7hlh71>>;
        /**
         *Item has been restored back from its NFT representation [collection_id, item_id, owner]
         */
        ItemRestored: PlainDescriptor<Anonymize<I4cn9jhc7hlh71>>;
    };
    AffiliatesAAA: {
        /**
        
         */
        AccountMarkedAsAffiliatable: PlainDescriptor<Anonymize<Ibbiemldf16hc1>>;
        /**
        
         */
        AccountAffiliated: PlainDescriptor<Anonymize<I1o0nv6o4hvf0g>>;
        /**
        
         */
        RuleAdded: PlainDescriptor<Anonymize<I23pebjb6u0sjr>>;
        /**
        
         */
        RuleCleared: PlainDescriptor<Anonymize<I23pebjb6u0sjr>>;
    };
    TournamentAAA: {
        /**
        
         */
        TournamentCreated: PlainDescriptor<Anonymize<Icstv6ibqm5s04>>;
        /**
        
         */
        TournamentRemoved: PlainDescriptor<Anonymize<Icstv6ibqm5s04>>;
        /**
        
         */
        TournamentActivePeriodStarted: PlainDescriptor<Anonymize<Icstv6ibqm5s04>>;
        /**
        
         */
        TournamentClaimPeriodStarted: PlainDescriptor<Anonymize<Icstv6ibqm5s04>>;
        /**
        
         */
        TournamentEnded: PlainDescriptor<Anonymize<Icstv6ibqm5s04>>;
        /**
        
         */
        EntityEnteredRanking: PlainDescriptor<Anonymize<I4h808123o17rc>>;
        /**
        
         */
        EntityBecameGoldenDuck: PlainDescriptor<Anonymize<Ic00t9uvgue0rr>>;
        /**
        
         */
        RankingRewardClaimed: PlainDescriptor<Anonymize<I3e2mdc36iuuk>>;
        /**
        
         */
        GoldenDuckRewardClaimed: PlainDescriptor<Anonymize<I3e2mdc36iuuk>>;
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
    AssetRegistry: {
        /**
        
         */
        ReserveAssetRegistered: PlainDescriptor<Anonymize<If30c5nhp9me6o>>;
        /**
        
         */
        ReserveAssetUnregistered: PlainDescriptor<Anonymize<If30c5nhp9me6o>>;
    };
    PoolAssets: {
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
    AssetConversion: {
        /**
         *A successful call of the `CreatePool` extrinsic will create this event.
         */
        PoolCreated: PlainDescriptor<Anonymize<I5okq99a5mhve0>>;
        /**
         *A successful call of the `AddLiquidity` extrinsic will create this event.
         */
        LiquidityAdded: PlainDescriptor<Anonymize<Ibtl2buofcs39i>>;
        /**
         *A successful call of the `RemoveLiquidity` extrinsic will create this event.
         */
        LiquidityRemoved: PlainDescriptor<Anonymize<I359nvpbbb5v0e>>;
        /**
         *Assets have been converted from one to another. Both `SwapExactTokenForToken`
         *and `SwapTokenForExactToken` will generate this event.
         */
        SwapExecuted: PlainDescriptor<Anonymize<I8t31d95clla6j>>;
        /**
         *Assets have been converted from one to another.
         */
        SwapCreditExecuted: PlainDescriptor<Anonymize<Ifcsperb0j354i>>;
        /**
         *Pool has been touched in order to fulfill operational requirements.
         */
        Touched: PlainDescriptor<Anonymize<Ideuk4ni7h8umc>>;
    };
    AssetConversionTxPayment: {
        /**
         *A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
         *has been paid by `who` in an asset `asset_id`.
         */
        AssetTxFeePaid: PlainDescriptor<Anonymize<Icjn9u0mv2cnn4>>;
        /**
         *A swap of the refund in native currency back to asset failed.
         */
        AssetRefundFailed: PlainDescriptor<Anonymize<Icjchvrijclvlv>>;
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
    ParachainSystem: {
        /**
         *Attempt to upgrade validation function while existing upgrade pending.
         */
        OverlappingUpgrades: PlainDescriptor<undefined>;
        /**
         *Polkadot currently prohibits this parachain from upgrading its validation function.
         */
        ProhibitedByPolkadot: PlainDescriptor<undefined>;
        /**
         *The supplied validation function has compiled into a blob larger than Polkadot is
         *willing to run.
         */
        TooBig: PlainDescriptor<undefined>;
        /**
         *The inherent which supplies the validation data did not run this block.
         */
        ValidationDataNotAvailable: PlainDescriptor<undefined>;
        /**
         *The inherent which supplies the host configuration did not run this block.
         */
        HostConfigurationNotAvailable: PlainDescriptor<undefined>;
        /**
         *No validation function upgrade is currently scheduled.
         */
        NotScheduled: PlainDescriptor<undefined>;
        /**
         *No code upgrade has been authorized.
         */
        NothingAuthorized: PlainDescriptor<undefined>;
        /**
         *The given code upgrade has not been authorized.
         */
        Unauthorized: PlainDescriptor<undefined>;
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
        /**
         *No ticket with a cost was returned by [`Config::Consideration`] to store the preimage.
         */
        NoCost: PlainDescriptor<undefined>;
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
    CollatorSelection: {
        /**
         *The pallet has too many candidates.
         */
        TooManyCandidates: PlainDescriptor<undefined>;
        /**
         *Leaving would result in too few candidates.
         */
        TooFewEligibleCollators: PlainDescriptor<undefined>;
        /**
         *Account is already a candidate.
         */
        AlreadyCandidate: PlainDescriptor<undefined>;
        /**
         *Account is not a candidate.
         */
        NotCandidate: PlainDescriptor<undefined>;
        /**
         *There are too many Invulnerables.
         */
        TooManyInvulnerables: PlainDescriptor<undefined>;
        /**
         *Account is already an Invulnerable.
         */
        AlreadyInvulnerable: PlainDescriptor<undefined>;
        /**
         *Account is not an Invulnerable.
         */
        NotInvulnerable: PlainDescriptor<undefined>;
        /**
         *Account has no associated validator ID.
         */
        NoAssociatedValidatorId: PlainDescriptor<undefined>;
        /**
         *Validator ID is not yet registered.
         */
        ValidatorNotRegistered: PlainDescriptor<undefined>;
        /**
         *Could not insert in the candidate list.
         */
        InsertToCandidateListFailed: PlainDescriptor<undefined>;
        /**
         *Could not remove from the candidate list.
         */
        RemoveFromCandidateListFailed: PlainDescriptor<undefined>;
        /**
         *New deposit amount would be below the minimum candidacy bond.
         */
        DepositTooLow: PlainDescriptor<undefined>;
        /**
         *Could not update the candidate list.
         */
        UpdateCandidateListFailed: PlainDescriptor<undefined>;
        /**
         *Deposit amount is too low to take the target's slot in the candidate list.
         */
        InsufficientBond: PlainDescriptor<undefined>;
        /**
         *The target account to be replaced in the candidate list is not a candidate.
         */
        TargetIsNotCandidate: PlainDescriptor<undefined>;
        /**
         *The updated deposit amount is equal to the amount already reserved.
         */
        IdenticalDeposit: PlainDescriptor<undefined>;
        /**
         *Cannot lower candidacy bond while occupying a future collator slot in the list.
         */
        InvalidUnreserve: PlainDescriptor<undefined>;
    };
    Session: {
        /**
         *Invalid ownership proof.
         */
        InvalidProof: PlainDescriptor<undefined>;
        /**
         *No associated validator ID for account.
         */
        NoAssociatedValidatorId: PlainDescriptor<undefined>;
        /**
         *Registered duplicate key.
         */
        DuplicatedKey: PlainDescriptor<undefined>;
        /**
         *No keys are associated with this account.
         */
        NoKeys: PlainDescriptor<undefined>;
        /**
         *Key setting account is not live, so it's impossible to associate keys.
         */
        NoAccount: PlainDescriptor<undefined>;
    };
    XcmpQueue: {
        /**
         *Setting the queue config failed since one of its values was invalid.
         */
        BadQueueConfig: PlainDescriptor<undefined>;
        /**
         *The execution is already suspended.
         */
        AlreadySuspended: PlainDescriptor<undefined>;
        /**
         *The execution is already resumed.
         */
        AlreadyResumed: PlainDescriptor<undefined>;
        /**
         *There are too many active outbound channels.
         */
        TooManyActiveOutboundChannels: PlainDescriptor<undefined>;
        /**
         *The message is too big.
         */
        TooBig: PlainDescriptor<undefined>;
    };
    PolkadotXcm: {
        /**
         *The desired destination was unreachable, generally because there is a no way of routing
         *to it.
         */
        Unreachable: PlainDescriptor<undefined>;
        /**
         *There was some other issue (i.e. not to do with routing) in sending the message.
         *Perhaps a lack of space for buffering the message.
         */
        SendFailure: PlainDescriptor<undefined>;
        /**
         *The message execution fails the filter.
         */
        Filtered: PlainDescriptor<undefined>;
        /**
         *The message's weight could not be determined.
         */
        UnweighableMessage: PlainDescriptor<undefined>;
        /**
         *The destination `Location` provided cannot be inverted.
         */
        DestinationNotInvertible: PlainDescriptor<undefined>;
        /**
         *The assets to be sent are empty.
         */
        Empty: PlainDescriptor<undefined>;
        /**
         *Could not re-anchor the assets to declare the fees for the destination chain.
         */
        CannotReanchor: PlainDescriptor<undefined>;
        /**
         *Too many assets have been attempted for transfer.
         */
        TooManyAssets: PlainDescriptor<undefined>;
        /**
         *Origin is invalid for sending.
         */
        InvalidOrigin: PlainDescriptor<undefined>;
        /**
         *The version of the `Versioned` value used is not able to be interpreted.
         */
        BadVersion: PlainDescriptor<undefined>;
        /**
         *The given location could not be used (e.g. because it cannot be expressed in the
         *desired version of XCM).
         */
        BadLocation: PlainDescriptor<undefined>;
        /**
         *The referenced subscription could not be found.
         */
        NoSubscription: PlainDescriptor<undefined>;
        /**
         *The location is invalid since it already has a subscription from us.
         */
        AlreadySubscribed: PlainDescriptor<undefined>;
        /**
         *Could not check-out the assets for teleportation to the destination chain.
         */
        CannotCheckOutTeleport: PlainDescriptor<undefined>;
        /**
         *The owner does not own (all) of the asset that they wish to do the operation on.
         */
        LowBalance: PlainDescriptor<undefined>;
        /**
         *The asset owner has too many locks on the asset.
         */
        TooManyLocks: PlainDescriptor<undefined>;
        /**
         *The given account is not an identifiable sovereign account for any location.
         */
        AccountNotSovereign: PlainDescriptor<undefined>;
        /**
         *The operation required fees to be paid which the initiator could not meet.
         */
        FeesNotMet: PlainDescriptor<undefined>;
        /**
         *A remote lock with the corresponding data could not be found.
         */
        LockNotFound: PlainDescriptor<undefined>;
        /**
         *The unlock operation cannot succeed because there are still consumers of the lock.
         */
        InUse: PlainDescriptor<undefined>;
        /**
         *Invalid asset, reserve chain could not be determined for it.
         */
        InvalidAssetUnknownReserve: PlainDescriptor<undefined>;
        /**
         *Invalid asset, do not support remote asset reserves with different fees reserves.
         */
        InvalidAssetUnsupportedReserve: PlainDescriptor<undefined>;
        /**
         *Too many assets with different reserve locations have been attempted for transfer.
         */
        TooManyReserves: PlainDescriptor<undefined>;
        /**
         *Local XCM execution incomplete.
         */
        LocalExecutionIncomplete: PlainDescriptor<undefined>;
    };
    MessageQueue: {
        /**
         *Page is not reapable because it has items remaining to be processed and is not old
         *enough.
         */
        NotReapable: PlainDescriptor<undefined>;
        /**
         *Page to be reaped does not exist.
         */
        NoPage: PlainDescriptor<undefined>;
        /**
         *The referenced message could not be found.
         */
        NoMessage: PlainDescriptor<undefined>;
        /**
         *The message was already processed and cannot be processed again.
         */
        AlreadyProcessed: PlainDescriptor<undefined>;
        /**
         *The message is queued for future execution.
         */
        Queued: PlainDescriptor<undefined>;
        /**
         *There is temporarily not enough weight to continue servicing messages.
         */
        InsufficientWeight: PlainDescriptor<undefined>;
        /**
         *This message is temporarily unprocessable.
         *
         *Such errors are expected, but not guaranteed, to resolve themselves eventually through
         *retrying.
         */
        TemporarilyUnprocessable: PlainDescriptor<undefined>;
        /**
         *The queue is paused and no message can be executed from it.
         *
         *This can change at any time and may resolve in the future by re-trying.
         */
        QueuePaused: PlainDescriptor<undefined>;
        /**
         *Another call is in progress and needs to finish before this call can happen.
         */
        RecursiveDisallowed: PlainDescriptor<undefined>;
    };
    XTokens: {
        /**
         *Asset has no reserve location.
         */
        AssetHasNoReserve: PlainDescriptor<undefined>;
        /**
         *Not cross-chain transfer.
         */
        NotCrossChainTransfer: PlainDescriptor<undefined>;
        /**
         *Invalid transfer destination.
         */
        InvalidDest: PlainDescriptor<undefined>;
        /**
         *Currency is not cross-chain transferable.
         */
        NotCrossChainTransferableCurrency: PlainDescriptor<undefined>;
        /**
         *The message's weight could not be determined.
         */
        UnweighableMessage: PlainDescriptor<undefined>;
        /**
         *XCM execution failed.
         */
        XcmExecutionFailed: PlainDescriptor<undefined>;
        /**
         *Could not re-anchor the assets to declare the fees for the
         *destination chain.
         */
        CannotReanchor: PlainDescriptor<undefined>;
        /**
         *Could not get ancestry of asset reserve location.
         */
        InvalidAncestry: PlainDescriptor<undefined>;
        /**
         *The Asset is invalid.
         */
        InvalidAsset: PlainDescriptor<undefined>;
        /**
         *The destination `Location` provided cannot be inverted.
         */
        DestinationNotInvertible: PlainDescriptor<undefined>;
        /**
         *The version of the `Versioned` value used is not able to be
         *interpreted.
         */
        BadVersion: PlainDescriptor<undefined>;
        /**
         *We tried sending distinct asset and fee but they have different
         *reserve chains.
         */
        DistinctReserveForAssetAndFee: PlainDescriptor<undefined>;
        /**
         *The fee is zero.
         */
        ZeroFee: PlainDescriptor<undefined>;
        /**
         *The transfering asset amount is zero.
         */
        ZeroAmount: PlainDescriptor<undefined>;
        /**
         *The number of assets to be sent is over the maximum.
         */
        TooManyAssetsBeingSent: PlainDescriptor<undefined>;
        /**
         *The specified index does not exist in a Assets struct.
         */
        AssetIndexNonExistent: PlainDescriptor<undefined>;
        /**
         *Fee is not enough.
         */
        FeeNotEnough: PlainDescriptor<undefined>;
        /**
         *Not supported Location
         */
        NotSupportedLocation: PlainDescriptor<undefined>;
        /**
         *MinXcmFee not registered for certain reserve location
         */
        MinXcmFeeNotDefined: PlainDescriptor<undefined>;
        /**
         *Asset transfer is limited by RateLimiter.
         */
        RateLimited: PlainDescriptor<undefined>;
    };
    OrmlXcm: {
        /**
         *The message and destination combination was not recognized as being
         *reachable.
         */
        Unreachable: PlainDescriptor<undefined>;
        /**
         *The message and destination was recognized as being reachable but
         *the operation could not be completed.
         */
        SendFailure: PlainDescriptor<undefined>;
        /**
         *The version of the `Versioned` value used is not able to be
         *interpreted.
         */
        BadVersion: PlainDescriptor<undefined>;
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
    CouncilMembership: {
        /**
         *Already a member.
         */
        AlreadyMember: PlainDescriptor<undefined>;
        /**
         *Not a member.
         */
        NotMember: PlainDescriptor<undefined>;
        /**
         *Too many members.
         */
        TooManyMembers: PlainDescriptor<undefined>;
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
    TechnicalCommitteeMembership: {
        /**
         *Already a member.
         */
        AlreadyMember: PlainDescriptor<undefined>;
        /**
         *Not a member.
         */
        NotMember: PlainDescriptor<undefined>;
        /**
         *Too many members.
         */
        TooManyMembers: PlainDescriptor<undefined>;
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
    AwesomeAvatars: {
        /**
         *There is no account set as the organizer
         */
        OrganizerNotSet: PlainDescriptor<undefined>;
        /**
         *There is no collection ID set for NFT handler.
         */
        CollectionIdNotSet: PlainDescriptor<undefined>;
        /**
         *The season starts before the previous season has ended.
         */
        EarlyStartTooEarly: PlainDescriptor<undefined>;
        /**
         *The season season start later than its early access
         */
        EarlyStartTooLate: PlainDescriptor<undefined>;
        /**
         *The season start date is newer than its end date.
         */
        SeasonStartTooLate: PlainDescriptor<undefined>;
        /**
         *The season ends after the new season has started.
         */
        SeasonEndTooLate: PlainDescriptor<undefined>;
        /**
         *The season's per period and periods configuration overflows.
         */
        PeriodConfigOverflow: PlainDescriptor<undefined>;
        /**
         *The season's periods configuration is indivisible by max variation.
         */
        PeriodsIndivisible: PlainDescriptor<undefined>;
        /**
         *The season doesn't exist.
         */
        UnknownSeason: PlainDescriptor<undefined>;
        /**
         *The avatar doesn't exist.
         */
        UnknownAvatar: PlainDescriptor<undefined>;
        /**
         *The avatar for sale doesn't exist.
         */
        UnknownAvatarForSale: PlainDescriptor<undefined>;
        /**
         *The tier doesn't exist.
         */
        UnknownTier: PlainDescriptor<undefined>;
        /**
         *The treasurer doesn't exist.
         */
        UnknownTreasurer: PlainDescriptor<undefined>;
        /**
         *The preparation doesn't exist.
         */
        UnknownPreparation: PlainDescriptor<undefined>;
        /**
         *The season ID of a season to create is not sequential.
         */
        NonSequentialSeasonId: PlainDescriptor<undefined>;
        /**
         *The sum of the given single mint probabilities overflows.
         */
        SingleMintProbsOverflow: PlainDescriptor<undefined>;
        /**
         *The sum of the given batch mint probabilities overflows.
         */
        BatchMintProbsOverflow: PlainDescriptor<undefined>;
        /**
         *Rarity percentages don't add up to 100
         */
        IncorrectRarityPercentages: PlainDescriptor<undefined>;
        /**
         *Max tier is achievable through forging only. Therefore the number of rarity percentages
         *must be less than that of tiers for a season.
         */
        TooManyRarityPercentages: PlainDescriptor<undefined>;
        /**
         *The given base probability is too high. It must be less than 100.
         */
        BaseProbTooHigh: PlainDescriptor<undefined>;
        /**
         *Some rarity tier are duplicated.
         */
        DuplicatedRarityTier: PlainDescriptor<undefined>;
        /**
         *Minting is not available at the moment.
         */
        MintClosed: PlainDescriptor<undefined>;
        /**
         *Forging is not available at the moment.
         */
        ForgeClosed: PlainDescriptor<undefined>;
        /**
         *Transfer is not available at the moment.
         */
        TransferClosed: PlainDescriptor<undefined>;
        /**
         *Trading is not available at the moment.
         */
        TradeClosed: PlainDescriptor<undefined>;
        /**
         *NFT transfer is not available at the moment.
         */
        NftTransferClosed: PlainDescriptor<undefined>;
        /**
         *Free mint transfer is not available at the moment.
         */
        FreeMintTransferClosed: PlainDescriptor<undefined>;
        /**
         *Attempt to mint or forge outside of an active season.
         */
        SeasonClosed: PlainDescriptor<undefined>;
        /**
         *Attempt to mint when the season has ended prematurely.
         */
        PrematureSeasonEnd: PlainDescriptor<undefined>;
        /**
         *Max ownership reached.
         */
        MaxOwnershipReached: PlainDescriptor<undefined>;
        /**
         *Max storage tier reached.
         */
        MaxStorageTierReached: PlainDescriptor<undefined>;
        /**
         *Avatar belongs to someone else.
         */
        Ownership: PlainDescriptor<undefined>;
        /**
         *Attempt to buy his or her own avatar.
         */
        AlreadyOwned: PlainDescriptor<undefined>;
        /**
         *Incorrect DNA.
         */
        IncorrectDna: PlainDescriptor<undefined>;
        /**
         *Incorrect data.
         */
        IncorrectData: PlainDescriptor<undefined>;
        /**
         *Incorrect Avatar ID.
         */
        IncorrectAvatarId: PlainDescriptor<undefined>;
        /**
         *Incorrect season ID.
         */
        IncorrectSeasonId: PlainDescriptor<undefined>;
        /**
         *The player must wait cooldown period.
         */
        MintCooldown: PlainDescriptor<undefined>;
        /**
         *The season's max components value is less than the minimum allowed (1).
         */
        MaxComponentsTooLow: PlainDescriptor<undefined>;
        /**
         *The season's max components value is more than the maximum allowed (random byte: 32).
         */
        MaxComponentsTooHigh: PlainDescriptor<undefined>;
        /**
         *The season's max variations value is less than the minimum allowed (1).
         */
        MaxVariationsTooLow: PlainDescriptor<undefined>;
        /**
         *The season's max variations value is more than the maximum allowed (15).
         */
        MaxVariationsTooHigh: PlainDescriptor<undefined>;
        /**
         *The player has not enough free mints available.
         */
        InsufficientFreeMints: PlainDescriptor<undefined>;
        /**
         *The player has not enough balance available.
         */
        InsufficientBalance: PlainDescriptor<undefined>;
        /**
         *Attempt to transfer, issue or withdraw free mints lower than the minimum allowed.
         */
        TooLowFreeMints: PlainDescriptor<undefined>;
        /**
         *Less than minimum allowed sacrifices are used for forging.
         */
        TooFewSacrifices: PlainDescriptor<undefined>;
        /**
         *More than maximum allowed sacrifices are used for forging.
         */
        TooManySacrifices: PlainDescriptor<undefined>;
        /**
         *Leader is being sacrificed.
         */
        LeaderSacrificed: PlainDescriptor<undefined>;
        /**
         *This avatar cannot be used in trades.
         */
        AvatarCannotBeTraded: PlainDescriptor<undefined>;
        /**
         *An avatar listed for trade is used to forge.
         */
        AvatarInTrade: PlainDescriptor<undefined>;
        /**
         *The avatar is currently locked and cannot be used.
         */
        AvatarLocked: PlainDescriptor<undefined>;
        /**
         *The avatar is not currently locked and cannot be unlocked.
         */
        AvatarNotLocked: PlainDescriptor<undefined>;
        /**
         *The avatar is currently unlocked and cannot be locked again.
         */
        AvatarUnlocked: PlainDescriptor<undefined>;
        /**
         *Tried to forge avatars from different seasons.
         */
        IncorrectAvatarSeason: PlainDescriptor<undefined>;
        /**
         *Tried to forge avatars with different DNA versions.
         */
        IncompatibleAvatarVersions: PlainDescriptor<undefined>;
        /**
         *There's not enough space to hold the forging results
         */
        InsufficientStorageForForging: PlainDescriptor<undefined>;
        /**
         *Tried transferring to his or her own account.
         */
        CannotTransferToSelf: PlainDescriptor<undefined>;
        /**
         *Tried transferring while the account still hasn't minted and forged anything.
         */
        CannotTransferFromInactiveAccount: PlainDescriptor<undefined>;
        /**
         *Tried claiming treasury during a season.
         */
        CannotClaimDuringSeason: PlainDescriptor<undefined>;
        /**
         *Tried claiming treasury which is zero.
         */
        CannotClaimZero: PlainDescriptor<undefined>;
        /**
         *The components tried to mint were not compatible.
         */
        IncompatibleMintComponents: PlainDescriptor<undefined>;
        /**
         *The components tried to forge were not compatible.
         */
        IncompatibleForgeComponents: PlainDescriptor<undefined>;
        /**
         *The amount of sacrifices is not sufficient for forging.
         */
        InsufficientSacrifices: PlainDescriptor<undefined>;
        /**
         *The amount of sacrifices is too much for forging.
         */
        ExcessiveSacrifices: PlainDescriptor<undefined>;
        /**
         *Tried to prepare an already prepared avatar.
         */
        AlreadyPrepared: PlainDescriptor<undefined>;
        /**
         *Tried to prepare an IPFS URL for an avatar, that is not yet prepared.
         */
        NotPrepared: PlainDescriptor<undefined>;
        /**
         *No service account has been set.
         */
        NoServiceAccount: PlainDescriptor<undefined>;
        /**
         *Tried to prepare an IPFS URL for an avatar with an empty URL.
         */
        EmptyIpfsUrl: PlainDescriptor<undefined>;
        /**
         *The account trying to be whitelisted is already in the whitelist
         */
        AccountAlreadyInWhitelist: PlainDescriptor<undefined>;
        /**
         *Cannot add more accounts to the whitelist.
         */
        WhitelistedAccountsLimitReached: PlainDescriptor<undefined>;
        /**
         *No account matches the provided affiliator identifier
         */
        AffiliatorNotFound: PlainDescriptor<undefined>;
        /**
         *The feature is locked for the current player
         */
        FeatureLocked: PlainDescriptor<undefined>;
        /**
         *The feature trying to be unlocked is not available for the selected season
         */
        FeatureLockedInSeason: PlainDescriptor<undefined>;
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
         *Couldn't find a tournament ranker for the active tournament; qed
         */
        TournamentRankerNotFound: PlainDescriptor<undefined>;
        /**
         *Only whitelisted accounts can affiliate for others
         */
        AffiliateOthersOnlyWhiteListed: PlainDescriptor<undefined>;
    };
    Nft: {
        /**
         *The signing account has no permission to do the operation.
         */
        NoPermission: PlainDescriptor<undefined>;
        /**
         *The given item ID is unknown.
         */
        UnknownCollection: PlainDescriptor<undefined>;
        /**
         *The item ID has already been used for an item.
         */
        AlreadyExists: PlainDescriptor<undefined>;
        /**
         *The approval had a deadline that expired, so the approval isn't valid anymore.
         */
        ApprovalExpired: PlainDescriptor<undefined>;
        /**
         *The owner turned out to be different to what was expected.
         */
        WrongOwner: PlainDescriptor<undefined>;
        /**
         *The witness data given does not match the current state of the chain.
         */
        BadWitness: PlainDescriptor<undefined>;
        /**
         *Collection ID is already taken.
         */
        CollectionIdInUse: PlainDescriptor<undefined>;
        /**
         *Items within that collection are non-transferable.
         */
        ItemsNonTransferable: PlainDescriptor<undefined>;
        /**
         *The provided account is not a delegate.
         */
        NotDelegate: PlainDescriptor<undefined>;
        /**
         *The delegate turned out to be different to what was expected.
         */
        WrongDelegate: PlainDescriptor<undefined>;
        /**
         *No approval exists that would allow the transfer.
         */
        Unapproved: PlainDescriptor<undefined>;
        /**
         *The named owner has not signed ownership acceptance of the collection.
         */
        Unaccepted: PlainDescriptor<undefined>;
        /**
         *The item is locked (non-transferable).
         */
        ItemLocked: PlainDescriptor<undefined>;
        /**
         *Item's attributes are locked.
         */
        LockedItemAttributes: PlainDescriptor<undefined>;
        /**
         *Collection's attributes are locked.
         */
        LockedCollectionAttributes: PlainDescriptor<undefined>;
        /**
         *Item's metadata is locked.
         */
        LockedItemMetadata: PlainDescriptor<undefined>;
        /**
         *Collection's metadata is locked.
         */
        LockedCollectionMetadata: PlainDescriptor<undefined>;
        /**
         *All items have been minted.
         */
        MaxSupplyReached: PlainDescriptor<undefined>;
        /**
         *The max supply is locked and can't be changed.
         */
        MaxSupplyLocked: PlainDescriptor<undefined>;
        /**
         *The provided max supply is less than the number of items a collection already has.
         */
        MaxSupplyTooSmall: PlainDescriptor<undefined>;
        /**
         *The given item ID is unknown.
         */
        UnknownItem: PlainDescriptor<undefined>;
        /**
         *Swap doesn't exist.
         */
        UnknownSwap: PlainDescriptor<undefined>;
        /**
         *The given item has no metadata set.
         */
        MetadataNotFound: PlainDescriptor<undefined>;
        /**
         *The provided attribute can't be found.
         */
        AttributeNotFound: PlainDescriptor<undefined>;
        /**
         *Item is not for sale.
         */
        NotForSale: PlainDescriptor<undefined>;
        /**
         *The provided bid is too low.
         */
        BidTooLow: PlainDescriptor<undefined>;
        /**
         *The item has reached its approval limit.
         */
        ReachedApprovalLimit: PlainDescriptor<undefined>;
        /**
         *The deadline has already expired.
         */
        DeadlineExpired: PlainDescriptor<undefined>;
        /**
         *The duration provided should be less than or equal to `MaxDeadlineDuration`.
         */
        WrongDuration: PlainDescriptor<undefined>;
        /**
         *The method is disabled by system settings.
         */
        MethodDisabled: PlainDescriptor<undefined>;
        /**
         *The provided setting can't be set.
         */
        WrongSetting: PlainDescriptor<undefined>;
        /**
         *Item's config already exists and should be equal to the provided one.
         */
        InconsistentItemConfig: PlainDescriptor<undefined>;
        /**
         *Config for a collection or an item can't be found.
         */
        NoConfig: PlainDescriptor<undefined>;
        /**
         *Some roles were not cleared.
         */
        RolesNotCleared: PlainDescriptor<undefined>;
        /**
         *Mint has not started yet.
         */
        MintNotStarted: PlainDescriptor<undefined>;
        /**
         *Mint has already ended.
         */
        MintEnded: PlainDescriptor<undefined>;
        /**
         *The provided Item was already used for claiming.
         */
        AlreadyClaimed: PlainDescriptor<undefined>;
        /**
         *The provided data is incorrect.
         */
        IncorrectData: PlainDescriptor<undefined>;
        /**
         *The extrinsic was sent by the wrong origin.
         */
        WrongOrigin: PlainDescriptor<undefined>;
        /**
         *The provided signature is incorrect.
         */
        WrongSignature: PlainDescriptor<undefined>;
        /**
         *The provided metadata might be too long.
         */
        IncorrectMetadata: PlainDescriptor<undefined>;
        /**
         *Can't set more attributes per one call.
         */
        MaxAttributesLimitReached: PlainDescriptor<undefined>;
        /**
         *The provided namespace isn't supported in this call.
         */
        WrongNamespace: PlainDescriptor<undefined>;
        /**
         *Can't delete non-empty collections.
         */
        CollectionNotEmpty: PlainDescriptor<undefined>;
        /**
         *The witness data should be provided.
         */
        WitnessRequired: PlainDescriptor<undefined>;
    };
    NftTransfer: {
        /**
         *IPFS URL must not be an empty string.
         */
        EmptyIpfsUrl: PlainDescriptor<undefined>;
        /**
         *Item code must be different to attribute codes.
         */
        DuplicateItemCode: PlainDescriptor<undefined>;
        /**
         *The given NFT item doesn't exist.
         */
        UnknownItem: PlainDescriptor<undefined>;
        /**
         *The given claim doesn't exist.
         */
        UnknownClaim: PlainDescriptor<undefined>;
        /**
         *The given NFT is not owned by the requester.
         */
        NftNotOwned: PlainDescriptor<undefined>;
        /**
         *The given NFT is currently outside of the chain, transfer it back before attempting a
         *restore.
         */
        NftOutsideOfChain: PlainDescriptor<undefined>;
        /**
         *The process of restoring an NFT into an item has failed.
         */
        ItemRestoreFailure: PlainDescriptor<undefined>;
    };
    AffiliatesAAA: {
        /**
         *An account cannot affiliate itself
         */
        CannotAffiliateSelf: PlainDescriptor<undefined>;
        /**
         *The account is not allowed to receive affiliates
         */
        TargetAccountIsNotAffiliatable: PlainDescriptor<undefined>;
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
    TournamentAAA: {
        /**
         *There's no active tournament for the selected season.
         */
        NoActiveTournamentForSeason: PlainDescriptor<undefined>;
        /**
         *The current tournament is not in its reward claim period.
         */
        TournamentNotInClaimPeriod: PlainDescriptor<undefined>;
        /**
         *The latest tournament for the selected season identifier already started,
         *so it cannot be removed anymore.
         */
        LatestTournamentAlreadyStarted: PlainDescriptor<undefined>;
        /**
         *There's already an active tournament for the selected season.
         */
        AnotherTournamentAlreadyActiveForSeason: PlainDescriptor<undefined>;
        /**
         *Cannot find tournament data for the selected season id and tournament id combination.
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
    AssetRegistry: {
        /**
         *The Asset ID is already registered
         */
        AssetAlreadyRegistered: PlainDescriptor<undefined>;
        /**
         *The Asset ID does not exist
         */
        AssetDoesNotExist: PlainDescriptor<undefined>;
        /**
         *The Asset ID is not registered
         */
        AssetIsNotRegistered: PlainDescriptor<undefined>;
        /**
         *Invalid Location
         */
        WrongLocation: PlainDescriptor<undefined>;
    };
    PoolAssets: {
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
    AssetConversion: {
        /**
         *Provided asset pair is not supported for pool.
         */
        InvalidAssetPair: PlainDescriptor<undefined>;
        /**
         *Pool already exists.
         */
        PoolExists: PlainDescriptor<undefined>;
        /**
         *Desired amount can't be zero.
         */
        WrongDesiredAmount: PlainDescriptor<undefined>;
        /**
         *Provided amount should be greater than or equal to the existential deposit/asset's
         *minimal amount.
         */
        AmountOneLessThanMinimal: PlainDescriptor<undefined>;
        /**
         *Provided amount should be greater than or equal to the existential deposit/asset's
         *minimal amount.
         */
        AmountTwoLessThanMinimal: PlainDescriptor<undefined>;
        /**
         *Reserve needs to always be greater than or equal to the existential deposit/asset's
         *minimal amount.
         */
        ReserveLeftLessThanMinimal: PlainDescriptor<undefined>;
        /**
         *Desired amount can't be equal to the pool reserve.
         */
        AmountOutTooHigh: PlainDescriptor<undefined>;
        /**
         *The pool doesn't exist.
         */
        PoolNotFound: PlainDescriptor<undefined>;
        /**
         *An overflow happened.
         */
        Overflow: PlainDescriptor<undefined>;
        /**
         *The minimal amount requirement for the first token in the pair wasn't met.
         */
        AssetOneDepositDidNotMeetMinimum: PlainDescriptor<undefined>;
        /**
         *The minimal amount requirement for the second token in the pair wasn't met.
         */
        AssetTwoDepositDidNotMeetMinimum: PlainDescriptor<undefined>;
        /**
         *The minimal amount requirement for the first token in the pair wasn't met.
         */
        AssetOneWithdrawalDidNotMeetMinimum: PlainDescriptor<undefined>;
        /**
         *The minimal amount requirement for the second token in the pair wasn't met.
         */
        AssetTwoWithdrawalDidNotMeetMinimum: PlainDescriptor<undefined>;
        /**
         *Optimal calculated amount is less than desired.
         */
        OptimalAmountLessThanDesired: PlainDescriptor<undefined>;
        /**
         *Insufficient liquidity minted.
         */
        InsufficientLiquidityMinted: PlainDescriptor<undefined>;
        /**
         *Requested liquidity can't be zero.
         */
        ZeroLiquidity: PlainDescriptor<undefined>;
        /**
         *Amount can't be zero.
         */
        ZeroAmount: PlainDescriptor<undefined>;
        /**
         *Calculated amount out is less than provided minimum amount.
         */
        ProvidedMinimumNotSufficientForSwap: PlainDescriptor<undefined>;
        /**
         *Provided maximum amount is not sufficient for swap.
         */
        ProvidedMaximumNotSufficientForSwap: PlainDescriptor<undefined>;
        /**
         *The provided path must consists of 2 assets at least.
         */
        InvalidPath: PlainDescriptor<undefined>;
        /**
         *The provided path must consists of unique assets.
         */
        NonUniquePath: PlainDescriptor<undefined>;
        /**
         *It was not possible to get or increment the Id of the pool.
         */
        IncorrectPoolAssetId: PlainDescriptor<undefined>;
        /**
         *The destination account cannot exist with the swapped funds.
         */
        BelowMinimum: PlainDescriptor<undefined>;
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
    ParachainSystem: {
        /**
         * Returns the parachain ID we are running with.
         */
        SelfParaId: PlainDescriptor<number>;
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
    Vesting: {
        /**
         * The minimum amount transferred to call `vested_transfer`.
         */
        MinVestedTransfer: PlainDescriptor<bigint>;
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
    XcmpQueue: {
        /**
         * The maximum number of inbound XCMP channels that can be suspended simultaneously.
         *
         * Any further channel suspensions will fail and messages may get dropped without further
         * notice. Choosing a high value (1000) is okay; the trade-off that is described in
         * [`InboundXcmpSuspended`] still applies at that scale.
         */
        MaxInboundSuspended: PlainDescriptor<number>;
        /**
         * Maximal number of outbound XCMP channels that can have messages queued at the same time.
         *
         * If this is reached, then no further messages can be sent to channels that do not yet
         * have a message queued. This should be set to the expected maximum of outbound channels
         * which is determined by [`Self::ChannelInfo`]. It is important to set this large enough,
         * since otherwise the congestion control protocol will not work as intended and messages
         * may be dropped. This value increases the PoV and should therefore not be picked too
         * high. Governance needs to pay attention to not open more channels than this value.
         */
        MaxActiveOutboundChannels: PlainDescriptor<number>;
        /**
         * The maximal page size for HRMP message pages.
         *
         * A lower limit can be set dynamically, but this is the hard-limit for the PoV worst case
         * benchmarking. The limit for the size of a message is slightly below this, since some
         * overhead is incurred for encoding the format.
         */
        MaxPageSize: PlainDescriptor<number>;
    };
    MessageQueue: {
        /**
         * The size of the page; this implies the maximum message size which can be sent.
         *
         * A good value depends on the expected message sizes, their weights, the weight that is
         * available for processing them and the maximal needed message size. The maximal message
         * size is slightly lower than this as defined by [`MaxMessageLenOf`].
         */
        HeapSize: PlainDescriptor<number>;
        /**
         * The maximum number of stale pages (i.e. of overweight messages) allowed before culling
         * can happen. Once there are more stale pages than this, then historical pages may be
         * dropped, even if they contain unprocessed overweight messages.
         */
        MaxStale: PlainDescriptor<number>;
        /**
         * The amount of weight (if any) which should be provided to the message queue for
         * servicing enqueued items `on_initialize`.
         *
         * This may be legitimately `None` in the case that you will call
         * `ServiceQueues::service_queues` manually or set [`Self::IdleMaxServiceWeight`] to have
         * it run in `on_idle`.
         */
        ServiceWeight: PlainDescriptor<Anonymize<Iasb8k6ash5mjn>>;
        /**
         * The maximum amount of weight (if any) to be used from remaining weight `on_idle` which
         * should be provided to the message queue for servicing enqueued items `on_idle`.
         * Useful for parachains to process messages at the same block they are received.
         *
         * If `None`, it will not call `ServiceQueues::service_queues` in `on_idle`.
         */
        IdleMaxServiceWeight: PlainDescriptor<Anonymize<Iasb8k6ash5mjn>>;
    };
    XTokens: {
        /**
         * Self chain location.
         */
        SelfLocation: PlainDescriptor<Anonymize<I4c0s5cioidn76>>;
        /**
         * Base XCM weight.
         *
         * The actually weight for an XCM message is `T::BaseXcmWeight +
         * T::Weigher::weight(&msg)`.
         */
        BaseXcmWeight: PlainDescriptor<Anonymize<I4q39t5hn830vp>>;
        /**
         * The id of the RateLimiter.
         */
        RateLimiterId: PlainDescriptor<undefined>;
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
    AwesomeAvatars: {
        /**
        
         */
        PalletId: PlainDescriptor<FixedSizeBinary<8>>;
        /**
         * The maximum length of an attribute key.
         */
        KeyLimit: PlainDescriptor<number>;
        /**
         * The maximum length of an attribute value.
         */
        ValueLimit: PlainDescriptor<number>;
        /**
         * The maximum depth of the propagation fee chain,
         */
        FeeChainMaxLength: PlainDescriptor<number>;
    };
    Nft: {
        /**
         * The basic amount of funds that must be reserved for collection.
         */
        CollectionDeposit: PlainDescriptor<bigint>;
        /**
         * The basic amount of funds that must be reserved for an item.
         */
        ItemDeposit: PlainDescriptor<bigint>;
        /**
         * The basic amount of funds that must be reserved when adding metadata to your item.
         */
        MetadataDepositBase: PlainDescriptor<bigint>;
        /**
         * The basic amount of funds that must be reserved when adding an attribute to an item.
         */
        AttributeDepositBase: PlainDescriptor<bigint>;
        /**
         * The additional funds that must be reserved for the number of bytes store in metadata,
         * either "normal" metadata or attribute metadata.
         */
        DepositPerByte: PlainDescriptor<bigint>;
        /**
         * The maximum length of data stored on-chain.
         */
        StringLimit: PlainDescriptor<number>;
        /**
         * The maximum length of an attribute key.
         */
        KeyLimit: PlainDescriptor<number>;
        /**
         * The maximum length of an attribute value.
         */
        ValueLimit: PlainDescriptor<number>;
        /**
         * The maximum approvals an item could have.
         */
        ApprovalsLimit: PlainDescriptor<number>;
        /**
         * The maximum attributes approvals an item could have.
         */
        ItemAttributesApprovalsLimit: PlainDescriptor<number>;
        /**
         * The max number of tips a user could send.
         */
        MaxTips: PlainDescriptor<number>;
        /**
         * The max duration in blocks for deadlines.
         */
        MaxDeadlineDuration: PlainDescriptor<number>;
        /**
         * The max number of attributes a user could set per call.
         */
        MaxAttributesPerCall: PlainDescriptor<number>;
        /**
         * Disables some of pallet's features.
         */
        Features: PlainDescriptor<bigint>;
    };
    NftTransfer: {
        /**
         * The NFT-transfer's pallet id, used for deriving its sovereign account ID.
         */
        PalletId: PlainDescriptor<FixedSizeBinary<8>>;
        /**
         * The maximum length of an attribute key.
         */
        KeyLimit: PlainDescriptor<number>;
        /**
         * The maximum length of an attribute value.
         */
        ValueLimit: PlainDescriptor<number>;
    };
    AffiliatesAAA: {
        /**
         * The maximum depth of the affiliate relation chain,
         */
        AffiliateMaxLevel: PlainDescriptor<number>;
    };
    TournamentAAA: {
        /**
        
         */
        PalletId: PlainDescriptor<FixedSizeBinary<8>>;
        /**
         * Minimum duration of the tournament active and claim periods in blocks.
         */
        MinimumTournamentPhaseDuration: PlainDescriptor<number>;
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
    PoolAssets: {
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
    AssetConversion: {
        /**
         * A % the liquidity providers will take of every swap. Represents 10ths of a percent.
         */
        LPFee: PlainDescriptor<number>;
        /**
         * A one-time fee to setup the pool.
         */
        PoolSetupFee: PlainDescriptor<bigint>;
        /**
         * Asset class from [`Config::Assets`] used to pay the [`Config::PoolSetupFee`].
         */
        PoolSetupFeeAsset: PlainDescriptor<Anonymize<Ikjpbtmstl9nm>>;
        /**
         * A fee to withdraw the liquidity.
         */
        LiquidityWithdrawalFee: PlainDescriptor<number>;
        /**
         * The minimum LP token amount that could be minted. Ameliorates rounding errors.
         */
        MintMinLiquidity: PlainDescriptor<bigint>;
        /**
         * The max number of hops in a swap.
         */
        MaxSwapPathLength: PlainDescriptor<number>;
        /**
         * The pallet's id, used for deriving its sovereign account ID.
         */
        PalletId: PlainDescriptor<FixedSizeBinary<8>>;
    };
};
type IRuntimeCalls = {
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
     * This runtime API is used to inform potential block authors whether they will
     * have the right to author at a slot, assuming they have claimed the slot.
     *
     * In particular, this API allows Aura-based parachains to regulate their "unincluded segment",
     * which is the section of the head of the chain which has not yet been made available in the
     * relay chain.
     *
     * When the unincluded segment is short, Aura chains will allow authors to create multiple
     * blocks per slot in order to build a backlog. When it is saturated, this API will limit
     * the amount of blocks that can be created.
     */
    AuraUnincludedSegmentApi: {
        /**
         * Whether it is legal to extend the chain, assuming the given block is the most
         * recently included one as-of the relay parent that will be built against, and
         * the given slot.
         *
         * This should be consistent with the logic the runtime uses when validating blocks to
         * avoid issues.
         *
         * When the unincluded segment is empty, i.e. `included_hash == at`, where at is the block
         * whose state we are querying against, this must always return `true` as long as the slot
         * is more recent than the included block itself.
         */
        can_build_upon: RuntimeDescriptor<[included_hash: FixedSizeBinary<32>, slot: bigint], boolean>;
    };
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
        apply_extrinsic: RuntimeDescriptor<[extrinsic: Binary], Anonymize<I1fo4p0sd7bgbi>>;
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
     * Runtime api to collect information about a collation.
     */
    CollectCollationInfo: {
        /**
         * Collect information about a collation.
         *
         * The given `header` is the header of the built block for that
         * we are collecting the collation info for.
         */
        collect_collation_info: RuntimeDescriptor<[header: Anonymize<Ic952bubvq4k7d>], Anonymize<Ic1d4u2opv3fst>>;
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
type IAsset = PlainDescriptor<Anonymize<Ikjpbtmstl9nm>>;
export type AjuDispatchError = Anonymize<I3o6sngfbhkojd>;
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
export type AjuQueries = QueryFromPalletsDef<PalletsTypedef>;
export type AjuCalls = TxFromPalletsDef<PalletsTypedef>;
export type AjuEvents = EventsFromPalletsDef<PalletsTypedef>;
export type AjuErrors = ErrorsFromPalletsDef<PalletsTypedef>;
export type AjuConstants = ConstFromPalletsDef<PalletsTypedef>;
export type AjuCallData = Anonymize<Iairqoj9f5otv2> & {
    value: {
        type: string;
    };
};
export type AjuWhitelistEntry = PalletKey | ApiKey<IRuntimeCalls> | `query.${NestedKey<PalletsTypedef['__storage']>}` | `tx.${NestedKey<PalletsTypedef['__tx']>}` | `event.${NestedKey<PalletsTypedef['__event']>}` | `error.${NestedKey<PalletsTypedef['__error']>}` | `const.${NestedKey<PalletsTypedef['__const']>}`;
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
