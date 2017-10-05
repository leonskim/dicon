//
//  IconChanger.m
//  dicon
//
//  Created by Leon Kim on 05/10/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "IconChanger.h"

@implementation IconChanger
RCT_EXPORT_MODULE();
RCT_EXPORT_METHOD(set:(NSString *)name)
{
  [[UIApplication sharedApplication] setAlternateIconName:name
                                        completionHandler:^(NSError * _Nullable error) {
                                          NSLog(@"%@", [error description]);
                                        }];
}
@end
