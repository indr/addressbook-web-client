import openpgp from 'openpgp';

const aks = [], keys = [];

export { aks, keys };

initAks();
initKeys();

function initKeys() {
  for (var i = 0; i < aks.length; i++) {
    keys[i] = [];
    keys[i][0] = openpgp.key.readArmored(aks[i][0]).keys;
    keys[i][1] = openpgp.key.readArmored(aks[i][1]).keys[0];
  }
}

function initAks() {
  aks[0] = []; // u1@example.com, 'secret'
  aks[0][0] = `-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: OpenPGP.js v2.3.2
Comment: http://openpgpjs.org

xsBNBFeoqN0BCAC0J+yBNXXxTUtxemSJCRwsQW93/JB3EtgkT5Jv6vzWq7On
O39ZUojJklDsyf+2frpCRSfWNF1ZNQgG3BTTwvSy2HQUF22LNJSR4pWye+p6
uxhA+xHzMpXH8xUE9VmfcAdr8JLpTQOQHBAREBnQwSc63XL7CTq5QzBmjuuO
w4gMyKT0Q5RjJRfdM9/lh8mWwIahZRgSFJ+a9nTmJa0/SAGMg36ly01HbwOV
aCRKtCY4fCMIKPaqOpDfZZbR8dTwsa1g4eLMqdluitW8ODTyE9nJ4m2c5do1
zvvBGaW72LdPk0ZsYmlmj91xCRbT+OjRjaLM4G7nzLQjRdRoDohGmIb5ABEB
AAHNAyA8PsLAdQQQAQgAKQUCV6io3gYLCQcIAwIJEH1unaQ20lG5BBUIAgoD
FgIBAhkBAhsDAh4BAADTUgf9EhQ94XJg0OVsz3rFhutO8QmZFila0vtS2yrj
uU4VvXdzWJhf1dGM8v9TYd9VqBdCTwKGezlWfKGPGIvocA6xMvejJZlXEwGP
EOMul5Lr7XGMVo2vzw7Ja66Mh++DqVeXIsbWhXo3wA60fKVdSf27T4lobkUV
8NlXqrCPEwDeGId6UdhV0ocFx/ND+bKF8Y+E9l9KlYqCu4AkSmXd/lB2VpyB
Vx5FBrX/oUWlTdWi2jaqaP2rkqQ0Tudy8OX1eaKtuVffy1u8/eXL15HKBbXe
3mVNrZwKvisjqxokNVQCjQz2QcdSIzqfcjx2j8ahUCJaaL3ZmBSvAui3FahG
oQ10yM7ATQRXqKjdAQgAystZvyTfS4gTVI7mr7EIhkqZImZiHkKplVg5xoOk
snkAEGxdsjTyZIbid+tdHJvYq1eUGToxmoPUbbxCXpteOmS8uMNYkoE+q8Lw
nQ/SIcStuY3PZfPLZQu5vu1G/SIrd9X5sSWG49DntBogoSwusaxr2x+vGcOe
MDc7i+7O3UYEX23AMJrtukuBVW5WJDGbyLQ/9dC4Qp7/Qpm9h8ovWB5R5Grf
Cr+bnxZjSGuvJ2USMjyOZnpJi/3jbHPyJL5dZVyHPW+Dg8o4Xv1mcDDSvzNI
ITmwy+qc7xNjjIqdGparxnPDeBOqIyYuUo0zTnYTLPdjnCAhPm94PH7bj9wi
FwARAQABwsBfBBgBCAATBQJXqKjeCRB9bp2kNtJRuQIbDAAAQdIH/jxJMWFF
mMDVL5+ZkGXLtvFghhVgQSpM2EHePcLh5q9cKf+3eQYWHX3ux6jf7CB+D2tl
xT+94emO8ycvCPBM3FELwg5sFtYEwJTWw6P8Wi7mch6JUXYi2h4kWL07SLfW
zhhjvKu0nl99Mb50k/fW2zboye0EJRPrps09gtK8CWG4R4GIhXPCP/9dcJq6
R6t8v4LroPGVNxNN2oxSN6jNdlzXEBo4R5Usrpb9jleMLY77EOFeeQGKIaYA
zkdKL+tHWYSKG/Nwr1L8DE57H1IUB+WtsxBLVPwJTgls5HQCdC668rOEMpo4
zfjX2DJetqG2G/U/RNSQR+t3a+AFcT7m89A=
=ulWN
-----END PGP PUBLIC KEY BLOCK-----`;
  
  aks[0][1] = `-----BEGIN PGP PRIVATE KEY BLOCK-----
Version: OpenPGP.js v2.3.2
Comment: http://openpgpjs.org

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
+NfYMl62obYb9T9E1JBH63dr4AVxPubz0A==
=dEhO
-----END PGP PRIVATE KEY BLOCK-----`;
}
