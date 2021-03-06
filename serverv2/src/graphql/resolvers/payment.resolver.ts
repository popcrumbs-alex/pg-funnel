import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PaymentService } from 'src/services/payment.service';
import {
  AddSubscriptionInput,
  CreatePaypalProductInput,
  GetPaypalProductInput,
} from '../inputs/payment.input';
import {
  AddSubscriptionResponse,
  CreatePaypalProductResponse,
  GetPaypalProductResponse,
} from '../responses/payment.response';

@Resolver()
export class PaymentResolver {
  constructor(private readonly paymentSerivce: PaymentService) {}

  @Query(() => GetPaypalProductResponse)
  async getPaypalProduct(@Args('input') input: GetPaypalProductInput) {
    return this.paymentSerivce.getPaypalProduct(input);
  }

  @Mutation(() => CreatePaypalProductResponse)
  async createPaypalProduct(@Args('input') input: CreatePaypalProductInput) {
    return this.paymentSerivce.createPaypalProduct(input);
  }

  @Mutation(() => AddSubscriptionResponse)
  async addSubscriptionToOrder(@Args('input') input: AddSubscriptionInput) {
    return this.paymentSerivce.addSubscriptionToPurchase(input);
  }
}
