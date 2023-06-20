// linker define fe25519_to_9l

#include "fe25519.h"

void fe25519_to_9l(fe25519_9l *r, const fe25519 *x) {
  
	r->l[0] = ((x->l[0] & 0x000000001FFFFFFF));
	r->l[1] = ((x->l[0] & 0x03FFFFFFE0000000) >> 29);
	r->l[2] = ((x->l[0] & 0xFC00000000000000) >> 58) | ((x->l[1] & 0x00000000007FFFFF) <<  6);
	r->l[3] = ((x->l[1] & 0x000FFFFFFF800000) >> 23);
	r->l[4] = ((x->l[1] & 0xFFF0000000000000) >> 52) | ((x->l[2] & 0x000000000001FFFF) << 12);
	r->l[5] = ((x->l[2] & 0x00003FFFFFFE0000) >> 17);
	r->l[6] = ((x->l[2] & 0xFFFFC00000000000) >> 46) | ((x->l[3] & 0x00000000000007FF) << 18);
	r->l[7] = ((x->l[3] & 0x000000FFFFFFF800) >> 11);
	r->l[8] = ((x->l[3] & 0x7FFFFF0000000000) >> 40);
}
